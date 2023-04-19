// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="bg-container">
    <div className="wave-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="wave-icon"
      />
      <h1 className="heading">Wave</h1>
    </div>
    <ul className="background-list">
      <li className="list-style">
        <Link to="/">Home</Link>
      </li>
      <li className="list-style">
        <Link to="/about">About</Link>
      </li>
      <li className="list-style">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </div>
)

export default Header
