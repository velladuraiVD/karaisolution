const express = require("express");
const { Pool } = require("pg"); // Import PostgreSQL library
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
const winston = require("winston");
const path = require("path");
const { combine, timestamp, printf } = winston.format;
require("dotenv").config();

const app = express();
const port = 8000;

app.use(cors());
app.use(bodyParser.json());

// Configure Winston logger
const logger = winston.createLogger({
  level: "info",
  format: combine(
    timestamp(),
    printf(({ level, message, timestamp }) => {
      return `${timestamp} ${level}: ${message}`;
    })
  ),
  transports: [
    new winston.transports.File({
      filename: path.join(__dirname, "combined.log"),
    }),
    new winston.transports.File({
      filename: path.join(__dirname, "error.log"),
      level: "error",
    }),
  ],
});

// Error handling middleware
app.use((err, req, res, next) => {
  logger.error(
    `${err.status || 500} - ${err.message} - ${req.originalUrl} - ${
      req.method
    } - ${req.ip}`
  );
  res.status(500).json({ error: err.message });
});

// PostgreSQL database configuration
const pool = new Pool({
  host: process.env.PG_HOST,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  port: process.env.PG_PORT,
});

async function createTables() {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS meetings (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      mobile VARCHAR(15) NOT NULL,
      email VARCHAR(255) NOT NULL,
      company VARCHAR(255) NOT NULL,
      message TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  try {
    await pool.query(createTableQuery);
    logger.info("Meetings table has been created or already exists.");
  } catch (error) {
    logger.error("Error creating meetings table:", error);
  }
}


pool.connect(async (err) => {
  if (err) {
    logger.error("Error connecting to PostgreSQL database:", err.stack);
    return;
  }
  logger.info("Connected to PostgreSQL database");
  

  await createTables();
});


const sender = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

sender.verify(function (error, success) {
  if (error) {
    logger.error("Error verifying email transporter:", error);
  } else {
    logger.info("Email transporter is ready");
  }
});

function sendEmailToAdmin(subject, html) {
  return new Promise((resolve, reject) => {
    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: subject,
      html: html,
    };

    sender.sendMail(mailOptions, function (error, info) {
      if (error) {
        logger.error("Error sending email to admin:", error);
        reject(error);
      } else {
        logger.info("Email sent to admin:", info.response);
        resolve(info.response);
      }
    });
  });
}

function sendEmailToUser(email, subject, html) {
  return new Promise((resolve, reject) => {
    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: email,
      subject: subject,
      html: html,
    };
    sender.sendMail(mailOptions, function (error, info) {
      if (error) {
        logger.error("Error sending email to user:", error);
        reject(error);
      } else {
        logger.info("Email sent to user:", info.response);
        resolve(info.response);
      }
    });
  });
}

function sendMeetingScheduledEmailToUser(email, name) {
  const content = process.env.MEETING_SCHEDULED_EMAIL_CONTENT.replace(
    /{name}/g,
    name
  );
  sendEmailToUser(email, process.env.MEETING_SCHEDULED_SUBJECT, content)
    .then(() => {
      logger.info(`Meeting scheduled email sent to ${email}`);
    })
    .catch((error) => {
      logger.error(`Error sending meeting scheduled email to ${email}:`, error);
      throw error; // Propagate error for error handling middleware
    });
}

function sendNewMeetingScheduledEmailToAdmin(
  name,
  mobile,
  email,
  company,
  message
) {
  let content = process.env.NEW_MEETING_SCHEDULED_EMAIL_CONTENT.replace(
    /{name}/g,
    name
  );
  content = content.replace(/{mobile}/g, mobile);
  content = content.replace(/{email}/g, email);
  content = content.replace(/{company}/g, company);
  content = content.replace(/{message}/g, message);
  sendEmailToAdmin(process.env.NEW_MEETING_SCHEDULED_SUBJECT, content)
    .then(() => {
      logger.info(`Meeting scheduled email sent to ${email}`);
    })
    .catch((error) => {
      logger.error(`Error sending meeting scheduled email to ${email}:`, error);
      throw error;
    });
}

app.post("/api/schedule-meeting", async (req, res, next) => {
  const { name, mobile, email, company, message } = req.body;
  const query =
    "INSERT INTO meetings (name, mobile, email, company, message) VALUES ($1, $2, $3, $4, $5) RETURNING *";
  const values = [name, mobile, email, company, message];

  try {
    const result = await pool.query(query, values);
    await sendMeetingScheduledEmailToUser(email, name);
    await sendNewMeetingScheduledEmailToAdmin(
      name,
      mobile,
      email,
      company,
      message
    );
    res.status(200).json({ message: "Form submitted successfully", data: result.rows[0] });
  } catch (error) {
    logger.error("Error processing schedule-meeting:", error);
    next(error);
  }
});



app.listen(port, () => {
  logger.info(`Server is running on http://localhost:${port}`);
});
