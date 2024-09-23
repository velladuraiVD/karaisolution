
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
import Supply from './Cloud/SupplyChain/Supply';
import Human from './Cloud/Human/Human';
import Advertise from './Cloud/Advertise/Advertise';
import CloudService from './Service/CloudService/CloudService';
import Devops from './Service/Devops/Devops';
import CMS from './Service/CMS/CMS';
import Ecommerce from './Service/E-commerce/Ecommerce';
import Internet from './Service/Internet/Internet';
import IT from './Service/IT/IT';
import Marketing from './Service/Marketing/Marketing';
import Industry from './Service/Industry/Industry';


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
              <Route path='/supply' element={<Supply/>} />
              <Route path='/human' element={<Human/>} />
              <Route path='/advertise' element={<Advertise/>} />
              <Route path='/cloudservice' element={<CloudService/>} />
              <Route path='/devops' element={<Devops/>} />
              <Route path='/cms' element={<CMS/>} />
              <Route path='/ecommerce' element={<Ecommerce/>} />
              <Route path='/industry' element={<Industry/>} />
              <Route path='/internet' element={<Internet/>} />
              <Route path='/IT' element={<IT/>} />
              <Route path='/marketing' element={<Marketing/>} />

            </Routes>
          </BrowserRouter>

          <Footer />
        </div>
      </div>
    </>

  );
}

export default App;
