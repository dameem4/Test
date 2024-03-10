import React from "react"
import Layout from "../pages/layout"
import backgroundImage from "../images/background.jepg" // Import your background image

const IndexPage = () => (
  <Layout>
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`, // Set background image
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1>Welcome to Ravuther Farm</h1>
      <p>This is a simple website for Ravuther Farm.</p>
      <p>Contact us to know more!</p>
    </div>
  </Layout>
)

export default IndexPage
