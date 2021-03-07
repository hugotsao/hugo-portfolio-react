import './App.css';

function App() {
  return (
    <div className="App d-flex h-100 text-center text-white bg-dark">

      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header className="mb-auto">
          <div>
            <h3 className="float-md-start mb-0">Cover</h3>
            <nav className="nav nav-masthead justify-content-center float-md-end">
              <div className="nav-link active" aria-current="page">Home</div>
              <div className="nav-link">Features</div>
              <div className="nav-link">Contact</div>
            </nav>
          </div>
        </header>

        <main className="px-3">
          <h1>Cover your page.</h1>
          <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
          <p className="lead">
            <button className="btn btn-lg btn-secondary fw-bold border-white bg-white">Learn more</button>
          </p>
        </main>

        <footer className="mt-auto text-white-50">
          <p>Cover template for <a href="https://getbootstrap.com/" className="text-white">Bootstrap</a>, by <a href="https://twitter.com/mdo" className="text-white">@mdo</a>.</p>
        </footer>
      </div>

    </div>
  );
}

export default App;
