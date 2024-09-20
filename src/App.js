
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Footer from './Footer';
import ContactCard from './ContactCard';
import Home from './Home/Home';
import NavBar from './NavBar';
import Company from './Aboutus.jsx/Company/Company';
import Vision from './Aboutus.jsx/Vision/vision';
import Careers from './Aboutus.jsx/Careers/Careers';
import Resource from './Cloud/Resource/Resource';
import Performance from './Cloud/Performence/Performance';


function App() {
  return (

    <>

      <div className='flex justify-center items-center'>

        <div className='container'>
          <ContactCard />
          <NavBar />

          <BrowserRouter>


            <Routes>

              <Route path='/' element={<Home />} />
              <Route path='/company' element={<Company />} />
              <Route path='/vision' element={<Vision />} />
              <Route path='/careers' element={<Careers/>} />
              <Route path='/resource' element={<Resource/>} />
              <Route path='/performance' element={<Performance/>} />
            </Routes>
          </BrowserRouter>

          <Footer />
        </div>
      </div>
    </>

  );
}

export default App;
