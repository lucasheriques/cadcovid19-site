import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Contact from "../components/Contact"
import Partners from "../components/Partners"
import News from "../components/News"
import Project from "../components/Project"
import Team from "../components/Team"
import { graphql } from "gatsby"

export default ({ data }) => {
  console.log(data)
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
        <Team images={data} />
      </div>

      <div>
        <Contact />
      </div>
    </Layout>
  )
}

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 128) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    alexeiImg: file(relativePath: { eq: "alexeiImg.jpg" }) {
      ...fluidImage
    }
    arthurImg: file(relativePath: { eq: "arthurImg.jpg" }) {
      ...fluidImage
    }
    camilaImg: file(relativePath: { eq: "camilaImg.jpg" }) {
      ...fluidImage
    }
    cristianoImg: file(relativePath: { eq: "cristianoImg.jpg" }) {
      ...fluidImage
    }
    diegoImg: file(relativePath: { eq: "diegoImg.jpg" }) {
      ...fluidImage
    }
    edemirImg: file(relativePath: { eq: "edemirImg.jpg" }) {
      ...fluidImage
    }
    esterImg: file(relativePath: { eq: "esterImg.jpg" }) {
      ...fluidImage
    }
    hugoImg: file(relativePath: { eq: "hugoImg.jpg" }) {
      ...fluidImage
    }
    jeferssonImg: file(relativePath: { eq: "jeferssonImg.jpg" }) {
      ...fluidImage
    }
    lucasImg: file(relativePath: { eq: "lucasImg.jpg" }) {
      ...fluidImage
    }
    marcosImg: file(relativePath: { eq: "marcosImg.jpg" }) {
      ...fluidImage
    }
    virginiaImg: file(relativePath: { eq: "virginiaImg.jpg" }) {
      ...fluidImage
    }
  }
`
