
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Footer from './Footer';
import ContactCard from './Home/ContactCard';
import Home from './Home/Home';
import NavBar from './NavBar';
import Company from './Aboutus.jsx/Company';

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
            </Routes>
          </BrowserRouter>

          <Footer />
        </div>
      </div>
    </>

  );
}

export default App;
