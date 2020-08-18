import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/index/Hero"
import Contact from "../components/index/Contact"
import Partners from "../components/index/Partners"
import News from "../components/index/News"
import Project from "../components/index/Project"

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
        <Contact />
      </div>
    </Layout>
  )
}
