import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import Profile from "../components/profile"
import PrivateRoute from "../components/PrivateRoute"
import Home from "../components/Home"
import { isLoggedIn } from "../services/auth"

const App = () => {
  return (
    <Layout>
      <Router basepath="/app">
        <PrivateRoute path="/" component={Home} />
        <PrivateRoute path="/profile" component={Profile} />
      </Router>
      PAGINA PRINCIPAL
    </Layout>
  )
}

export default App
