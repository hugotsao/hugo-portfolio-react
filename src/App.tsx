import './App.css';
import Navbar from './containers/Navbar';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Cover from './containers/Cover';
import WorkExp from './containers/WorkExp';
import About from './containers/About';

function App() {

  return (
    <div className="App d-flex h-100 text-center text-white bg-dark">

      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <Navbar />
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="/home">
              <Cover />
            </Route>
            <Route path="/work">
              <WorkExp />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </BrowserRouter>

      </div>

    </div>
  );
}

export default App;
