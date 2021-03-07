import './App.css';
import Footer from './containers/Footer';
import Navbar from './containers/Navbar';
import { useState, useEffect } from 'react';
import Cover from './containers/Cover';
import Resume from './containers/Resume';

function App() {

  const [currentPage, setCurrentPage] = useState("");
  useEffect(() => {
    const setHomePage= () => {
      setCurrentPage("Home");
    }
    setHomePage();
  }, []);

  return (
    <div className="App d-flex h-100 text-center text-white bg-dark">

      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        
        <Navbar setDisplayPage={setCurrentPage}/>
        
        {currentPage === "Home" ? <Cover /> : currentPage === "Resume" ? <Resume /> : <Cover/> }


        <Footer />
        
      </div>

    </div>
  );
}

export default App;
