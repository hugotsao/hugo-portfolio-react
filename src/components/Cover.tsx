const Cover = () => {
  /*
  const [showF1, setShowF1] = useState(false)
  const [showNFL, setShowNFL] = useState(false)
  <div className="row">
          <div className="col-6 markdown-align-left">
            <strong>Favorite things in F1:</strong>
            <button className="btn btn-info" hidden={showF1} onClick={() => setShowF1(!showF1)}>click to show</button>
            <div hidden={!showF1}>
              <ul>
                <li>Driver: Lando Norris</li>
                <li>Team: Ferreri</li>
                <li>Team Principle: Christian Horner</li>
              </ul>
              <button className="btn btn-danger" onClick={() => setShowF1(!showF1)}>TMI</button>
            </div>
          </div>
          <div className="col-6 markdown-align-left">
            <strong>Favorite things in NFL:</strong>
            <button className="btn btn-info" hidden={showNFL} onClick={() => setShowNFL(!showNFL)}>click to show</button>
            <div hidden={!showNFL}>
              <ul>
                <li>QB: Payton Manning</li>
                <li>Team: Kansas city chiefs</li>
                <li>Head Coach: Bill Belichick</li>
              </ul>
              <button className="btn btn-danger" onClick={() => setShowNFL(!showNFL)}>TMI</button>
            </div>
          </div>
        </div>
  */
  return (
    <main className="px-3">
      <h1>Hugo Cao</h1>
      <p className="lead">A simple programmer passionate about technologies.</p>
      <div className="container">
        <div className="row">
          <div className="col markdown-align-left">
            <strong>AWS</strong><br />
              IAM, APIGateway, CloudFormation, Lambda
          </div>
          <div className="col markdown-align-left">
            <strong>Web Services</strong><br />
            <ul>
              <li>
              Backend: Java, FastAPI</li>
              <li>Frontend: React</li>
              </ul>
            </div>

          <div className="col markdown-align-left">
            <strong>Other Tools</strong><br />
          Git, Maven, CI/CD tools, Linux, Emacs, Vim
        </div>
        </div>
      </div>
    </main>
  )
}

export default Cover
