
interface IProps {
  setDisplayPage(pageName: string): void;
}
const Navbar = ({ setDisplayPage }: IProps) => {
  const activatedLink = {
    "home": true,
    resume: false,
    about: false
  }
  const clickLink = (link: string) => {
    Object.keys(activatedLink).forEach(key => {
      if (link === key) {
        activatedLink[key] = true;
      }
    })
  }
  return (
    <header className="mb-auto">
      <div>
        <h3 className="float-md-start mb-0">Hugo-CV</h3>
        <nav className="nav nav-masthead justify-content-center float-md-end">
          <div className={`nav-link ${activatedLink.home}`} aria-current="page" onClick={() => { setDisplayPage('Home') }}>Home</div>
          <div className={`nav-link ${activatedLink.resume}`} onClick={() => { setDisplayPage('Resume') }}>Resume</div>
          <div className={`nav-link ${activatedLink.about}`} onClick={() => { setDisplayPage('About') }}>About</div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
