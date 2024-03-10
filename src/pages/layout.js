import React from "react"
import { Link } from "gatsby"
import "../layout.css" // Import your CSS file for layout styles

const Layout = ({ children }) => (
  <div>
    <header>
      <h1>Ravuther Farm</h1>
      <nav>
        <ul>
          <li><Link to="/" activeClassName="active">Home</Link></li>
          <li><Link to="/contact" activeClassName="active">Contact</Link></li>
        </ul>
      </nav>
    </header>
    <main>{children}</main>
    <footer>
      <p>&copy; {new Date().getFullYear()}, Ravuther Farm</p>
    </footer>
  </div>
)

export default Layout
