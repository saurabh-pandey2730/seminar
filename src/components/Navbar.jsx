import { pageLinks } from "../data"

const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <img src="./images/logo.svg" className="nav-logo" alt="backroads" />
        <button type="button" className="nav-toggle" id="nav-toggle">
          <i className="fas fa-bars" />
        </button>
      </div>
      {/* left this comment on purpose */}
      <ul className="nav-links" id="nav-links">
        { pageLinks.map((link)=>{
            return (
                <li key={link.id}>
                    <a href={link.href} className="nav-link">{link.text}</a>
                    
                </li>

            )
        }) }
       
      </ul>
      <ul className="nav-icons">
        <li>
          <a
            href="https://www.twitter.com"
            target="_blank"
            className="nav-icon"
          >
            <i className="fab fa-facebook" />
          </a>
        </li>
        <li>
          <a
            href="https://www.twitter.com"
            target="_blank"
            className="nav-icon"
          >
            <i className="fab fa-twitter" />
          </a>
        </li>
        <li>
          <a
            href="https://www.twitter.com"
            target="_blank"
            className="nav-icon"
          >
            <i className="fab fa-squarespace" />
          </a>
        </li>
      </ul>
    </div>
  </nav>
  )
}
export default Navbar