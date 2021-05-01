import './App.css';
import Navbar from './containers/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Cover from './containers/Cover';
import WorkExp from './containers/WorkExp';
import Educations from './containers/Educations';

function App() {
  return (
    <div className="App d-flex h-100 text-center text-white bg-dark">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <BrowserRouter>
          <Navbar />
            <Route exact path="/" component={Cover} />
            <Route path="/home" component={Cover} />
            <Route path="/work" component={WorkExp} />
            <Route path="/educations" component={Educations} />
        </BrowserRouter>
      </div>

    </div>
  );
}

export default App;
