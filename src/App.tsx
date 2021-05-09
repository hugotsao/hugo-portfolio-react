import './App.css';
import Navbar from './components/Navbar';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import { useState } from 'react';
import Cover from './components/Cover';
import WorkExp from './components/WorkExp';
import Educations from './components/Educations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload, faEnvelope, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { genPDF } from './utils/PDFUtils'
import { sendEmail } from './utils/Email'

function App() {
  const darkTheme = "text-light bg-dark"
  const lightTheme = "shadow-none text-dark bg-light"
  const [theme, setTheme] = useState(darkTheme)
  return (
    <HashRouter>
      <div className="container mw-100 header-box p-1">
        <div className="row">
          <div className="col-10">
            <Navbar />
          </div>
          <div className="col-2 font-awesome">
            <FontAwesomeIcon icon={faLightbulb} className="nav-items" onClick={() => {
              if (theme === darkTheme) {
                setTheme(lightTheme)
              } else {
                setTheme(darkTheme)
              }}} title="light swtich"/>
              <FontAwesomeIcon icon={faFileDownload} className="nav-items" onClick={() => genPDF()} title="Download PDF version"/>
              <FontAwesomeIcon icon={faLinkedinIn} className="nav-items" onClick={() => {window.open("https://github.com/hugotsao", '_blank');}} title="Go to my LinkedIn page" />
              <FontAwesomeIcon icon={faGithub} className="nav-items" onClick={() => {window.open("https://www.linkedin.com/in/huicao/", '_blank');}} title="Go to my github page" />
              <FontAwesomeIcon icon={faEnvelope} className="nav-items" title="Send me an email" onClick={() => {sendEmail(); return false}}/>
          </div>
        </div>
      </div>
      <div className={`App d-flex h-100 text-center ${theme}`}>
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home" component={Cover}>
          </Route>
          <Route path="/work" component={WorkExp} />
          <Route path="/educations" component={Educations} />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
