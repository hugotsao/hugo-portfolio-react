import { useState } from 'react';
const Cover = () => {
  const [showF1, setShowF1] = useState(false)
  const [showNFL, setShowNFL] = useState(false)

  return (
    <main className="px-3">
      <h1>Welcome to Hugo's page</h1>

      <p className="lead">I'm a Developer with 9 years experience. I enjoy watching sports in my spare time.</p>
      <div className="container">
        <div className="row">
          <div className="col-6 markdown-align-left">
            <strong>Favorite things in F1:</strong>
            <button hidden={showF1} onClick={() => setShowF1(!showF1)}>click to show</button>
            <div hidden={!showF1}>
              <ul>
                <li>Driver: Lando Norris</li>
                <li>Team: Ferreri</li>
                <li>Team Principle: Christian Horner</li>
              </ul>
              <button onClick={() => setShowF1(!showF1)}>TMI</button>
            </div>
          </div>
          <div className="col-6 markdown-align-left">
            <strong>Favorite things in NFL:</strong>
            <button hidden={showNFL} onClick={() => setShowNFL(!showNFL)}>click to show</button>
            <div hidden={!showNFL}>
              <ul>
                <li>QB: Payton Manning</li>
                <li>Team: Kansas city chiefs</li>
                <li>Head Coach: Bill Belichick</li>
              </ul>
              <button onClick={() => setShowNFL(!showNFL)}>TMI</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Cover
