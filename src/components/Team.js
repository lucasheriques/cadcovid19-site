import React from "react"
import Img from "gatsby-image"

const Team = ({ images }) => {
  const teamMembers = [
    {
      name: "Alexei Bernardo",
      lattes: "http://lattes.cnpq.br/5064888330358588",
      page: "",
      picture: images.alexeiImg.childImageSharp.fluid,
    },
    {
      name: "Arthur Bernardo",
      lattes: "http://lattes.cnpq.br/3823003000215959",
      page: "https://homepages.dcc.ufmg.br/~arthur.bernardo/",
      picture: images.arthurImg.childImageSharp.fluid,
    },
    {
      name: "Camila Laranjeira",
      lattes: "http://lattes.cnpq.br/1641872523529515",
      page: "https://homepages.dcc.ufmg.br/~camilalaranjeira/",
      picture: images.camilaImg.childImageSharp.fluid,
    },
    {
      name: "Cristiano Rodrigues",
      lattes: "http://lattes.cnpq.br/7261213964146389",
      page: "",
      picture: images.cristianoImg.childImageSharp.fluid,
    },
    {
      name: "Diego Haji Carvalho",
      lattes: "http://lattes.cnpq.br/3137083901051092",
      page: "",
      picture: images.diegoImg.childImageSharp.fluid,
    },
    {
      name: "Edemir Ferreira",
      lattes: "http://lattes.cnpq.br/7098181203977598",
      page: "https://homepages.dcc.ufmg.br/~edemirm",
      picture: images.edemirImg.childImageSharp.fluid,
    },
    {
      name: "Ester Fiorillo",
      lattes: "http://lattes.cnpq.br/4071172010758045",
      picture: images.esterImg.childImageSharp.fluid,
    },
    {
      name: "Hugo Neves de Oliveira",
      lattes: "http://lattes.cnpq.br/8517345373494027",
      page: "https://sites.google.com/view/oliveirahugo",
      picture: images.hugoImg.childImageSharp.fluid,
    },
    {
      name: "Jefersson dos Santos",
      lattes: "http://lattes.cnpq.br/2171782600728348",
      page: "https://homepages.dcc.ufmg.br/~jefersson",
      picture: images.jeferssonImg.childImageSharp.fluid,
    },
    {
      name: "Lucas H. de Faria",
      lattes: "http://lattes.cnpq.br/9040972267552794",
      page: "https://homepages.dcc.ufmg.br/~lucasfaria/",
      picture: images.lucasImg.childImageSharp.fluid,
    },
    {
      name: "Marcos Vendramini",
      lattes: "http://lattes.cnpq.br/8206412711416236",
      page: "",
      picture: images.marcosImg.childImageSharp.fluid,
    },
    {
      name: "Virgínia Mota",
      lattes: "http://lattes.cnpq.br/3250170839435251",
      page: "https://sites.google.com/view/virginiafernandes/",
      picture: images.virginiaImg.childImageSharp.fluid,
    },
  ]

  return (
    <div className="max-w-6xl sm:flex-row mx-auto grid my-16" id="team">
      <h2 className="text-center px-4 text-2xl text-indigo-500 font-bold sm:text-3xl">
        Equipe
      </h2>
      <ul className="grid grid-cols-2 col-gap-4 row-gap-8 sm:grid-cols-4 md:col-gap-6 lg:max-w-5xl lg:col-gap-8 lg:row-gap-12 xl:grid-cols-6 mt-8 min-w-full">
        {teamMembers.map(member => (
          <li key={member.name}>
            <div className="space-y-4">
              <Img
                fluid={member.picture}
                className="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24"
                alt={member.name}
              />
              <div className="space-y-2">
                <div className="text-xs text-center leading-4 font-medium lg:text-sm lg:leading-5">
                  <h4>{member.name}</h4>
                  <p>
                    <a
                      href={member.lattes}
                      className="text-indigo-600"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Lattes
                    </a>{" "}
                    {member.page && <span>· </span>}
                    {member.page && (
                      <a
                        href={member.page}
                        className="text-indigo-600"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Webpage
                      </a>
                    )}{" "}
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Team
