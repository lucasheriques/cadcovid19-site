import React from "react"
import SiteLayout from "../components/site/SiteLayout"
import Hero from "../components/site/Hero"
import Contact from "../components/site/Contact"
import Partners from "../components/site/Partners"
import News from "../components/site/News"
import Project from "../components/site/Project"

export default () => {
  return (
    <SiteLayout>
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
    </SiteLayout>
  )
}
