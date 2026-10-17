
import './App.css'

function App() {
  return (
    <main className="portfolio">
      <nav className="navbar">
        <a className="logo" href="#">V<span>.</span></a>

        <p className="availability">
          <span className="status-dot"></span>
          AVAILABLE FOR INTERNSHIPS
        </p>

        <a className="contact-link" href="#contact">
          LET'S TALK ↗
        </a>
      </nav>

      <section className="hero">
        <p className="eyebrow">COMPUTER SCIENCE ENGINEER · 2027</p>

        <h1>
          BUILDING
          <br />
          <span className="outline">DIGITAL</span>
          <br />
          EXPERIENCES<span className="accent">.</span>
        </h1>

        <div className="hero-footer">
          <p>
            I turn ideas into interactive digital
            experiences through code and creativity.
          </p>

          <a href="#about" className="explore">
            EXPLORE MY WORLD <span>↓</span>
          </a>
        </div>

        <span className="page-number">01 / 04</span>
      </section>

      <section className="about" id="about">
        <p className="eyebrow">A LITTLE ABOUT ME</p>
        <h2>
          Curious mind.
          <br />
          <span>Developer in progress.</span>
        </h2>
      </section>

      <footer id="contact">
        <span>DESIGNED & BUILT WITH CURIOSITY.</span>
        <a href="mailto:your-email@example.com">GET IN TOUCH ↗</a>
      </footer>
    </main>
  )
}

export default App
