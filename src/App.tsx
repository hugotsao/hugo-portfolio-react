import './App.css';
import Navbar from './containers/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import { useState } from 'react';
import Cover from './containers/Cover';
import WorkExp from './containers/WorkExp';
import Educations from './containers/Educations';

function App() {
  const darkTheme = "text-light bg-dark"
  const lightTheme = "text-dark bg-white"
  const [theme, setTheme] = useState(darkTheme)
  return (
    <BrowserRouter>
      <div className="container mw-100 header-box">
        <div className="row">
          <div className="col-10">
            <Navbar />
          </div>
          <div className="col-2 ">
            <button className={`nav-link ${theme}`} onClick={() => {
              if (theme === darkTheme) {
                setTheme(lightTheme)
              } else {
                setTheme(darkTheme)
              }
            }}>{
                theme === darkTheme ? "Lights on" : "Lights off"
              }</button>
          </div>
        </div>
      </div>
      <div className={`App d-flex h-100 text-center ${theme}`}>
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <Route exact path="/" component={Cover} />
          <Route path="/home" component={Cover} />
          <Route path="/work" component={WorkExp} />
          <Route path="/educations" component={Educations} />

        </div>
      </div>
    </BrowserRouter >
  );
}

export default App;
