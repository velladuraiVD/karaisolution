
import ContactCard from './Home/ContactCard';
import Home from './Home/Home';
import NavBar from './NavBar';

function App() {
  return (

    <>

      <div className='flex justify-center items-center'>

        <div className='container'>
          <ContactCard />
          <NavBar />
          <Home />
        </div>
      </div>
    </>

  );
}

export default App;
