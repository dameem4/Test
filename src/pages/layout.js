import React from "react"

const Layout = ({ children }) => (
  <div>
    <header>
      <h1>Ravuther Farm</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/contact">Contact</a></li>
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
