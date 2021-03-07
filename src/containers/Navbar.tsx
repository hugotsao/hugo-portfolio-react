interface IProps {
    setDisplayPage(pageName:string):void;
}
const Navbar = ( { setDisplayPage } : IProps) => {
    return (
        <header className="mb-auto">
          <div>
            <h3 className="float-md-start mb-0">Cover</h3>
            <nav className="nav nav-masthead justify-content-center float-md-end">
              <div className="nav-link active" aria-current="page" onClick={() => {setDisplayPage('Home')}}>Home</div>
              <div className="nav-link" onClick={() => {setDisplayPage('Resume')}}>Resume</div>
              <div className="nav-link" onClick={() => {setDisplayPage('About')}}>About</div>
            </nav>
          </div>
        </header>
    )
}

export default Navbar
