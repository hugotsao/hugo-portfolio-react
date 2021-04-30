
const Navbar = () => {
  return (
    <header className="mb-auto">
      <div>
        <nav className="nav nav-masthead justify-content-center float-md-end">
          <div className={`nav-link`}><a href='/home'>Home</a></div>
          <div className={`nav-link`}><a href='/work'>Working Experience</a></div>
          <div className={`nav-link`}><a href='/about'>About</a></div>

        </nav>
      </div>
    </header>
  )
}

export default Navbar
