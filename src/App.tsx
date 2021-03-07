import './App.css';
import Footer from './containers/Footer';
import Navbar from './containers/Navbar';
import { useState, useEffect } from 'react';

function App() {
  const [pages, setpages] = useState([
    "Home", "Resume", "About"
  ]);
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
        
        <Navbar />
        



        <Footer />
        
      </div>

    </div>
  );
}

export default App;
