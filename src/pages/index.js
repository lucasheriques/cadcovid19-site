import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Contact from "../components/Contact"
import Partners from "../components/Partners"
import News from "../components/News"
import Project from "../components/Project"
import Team from "../components/Team"

export default () => {
  return (
    <Layout>
      <Hero />
      <div>
        <Partners />
      </div>
      <div className="bg-gray-50">
        <Project />
      </div>

      <div>
        <News />
      </div>

      <div className="bg-gray-50">
        <Team />
      </div>

      <div>
        <Contact />
      </div>
    </Layout>
  )
}
