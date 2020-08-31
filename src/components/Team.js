import React from "react"
import lucasImg from "../images/team/lucas.jpg"
import ufmglogo from "../images/ufmg.png"
import fapemiglogo from "../images/fapemig.jpg"
import patreologo from "../images/patreo.png"

const Team = ({ children }) => {
  const team = [
    {
      name: "Lucas Faria",
      lattes: "http://lattes.cnpq.br/9040972267552794",
      page: "https://homepages.dcc.ufmg.br/~lucasfaria/",
      picture: lucasImg,
    },
    {
      name: "Lucas Faria",
      lattes: "http://lattes.cnpq.br/9040972267552794",
      page: "https://homepages.dcc.ufmg.br/~lucasfaria/",
      picture: lucasImg,
    },
    {
      name: "Lucas Faria",
      lattes: "http://lattes.cnpq.br/9040972267552794",
      page: "https://homepages.dcc.ufmg.br/~lucasfaria/",
      picture: lucasImg,
    },
    {
      name: "Lucas Faria",
      lattes: "http://lattes.cnpq.br/9040972267552794",
      page: "https://homepages.dcc.ufmg.br/~lucasfaria/",
      picture: lucasImg,
    },
    {
      name: "Lucas Faria",
      lattes: "http://lattes.cnpq.br/9040972267552794",
      page: "https://homepages.dcc.ufmg.br/~lucasfaria/",
      picture: lucasImg,
    },
    {
      name: "Lucas Faria",
      lattes: "http://lattes.cnpq.br/9040972267552794",
      page: "https://homepages.dcc.ufmg.br/~lucasfaria/",
      picture: lucasImg,
    },
    {
      name: "Lucas Faria",
      lattes: "http://lattes.cnpq.br/9040972267552794",
      page: "https://homepages.dcc.ufmg.br/~lucasfaria/",
      picture: lucasImg,
    },
    {
      name: "Lucas Faria",
      lattes: "http://lattes.cnpq.br/9040972267552794",
      page: "https://homepages.dcc.ufmg.br/~lucasfaria/",
      picture: lucasImg,
    },
    {
      name: "Lucas Faria",
      lattes: "http://lattes.cnpq.br/9040972267552794",
      page: "https://homepages.dcc.ufmg.br/~lucasfaria/",
      picture: lucasImg,
    },
    {
      name: "Lucas Faria",
      lattes: "http://lattes.cnpq.br/9040972267552794",
      page: "https://homepages.dcc.ufmg.br/~lucasfaria/",
      picture: lucasImg,
    },
    {
      name: "Lucas Faria",
      lattes: "http://lattes.cnpq.br/9040972267552794",
      page: "https://homepages.dcc.ufmg.br/~lucasfaria/",
      picture: lucasImg,
    },
    {
      name: "Lucas Faria",
      lattes: "http://lattes.cnpq.br/9040972267552794",
      page: "https://homepages.dcc.ufmg.br/~lucasfaria/",
      picture: lucasImg,
    },
  ]

  return (
    <div className="max-w-6xl sm:flex-row mx-auto grid my-8" id="team">
      <h2 className="text-center px-4 text-2xl text-indigo-500 font-bold sm:text-3xl">
        Equipe
      </h2>
      <ul className="grid grid-cols-2 col-gap-4 row-gap-8 sm:grid-cols-4 md:col-gap-6 lg:max-w-5xl lg:col-gap-8 lg:row-gap-12 xl:grid-cols-6">
        {team.map(member => (
          <li>
            <div className="space-y-4">
              <img
                className="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24"
                src={member.picture}
                alt=""
              />
              <div className="space-y-2">
                <div className="text-xs text-center leading-4 font-medium lg:text-sm lg:leading-5">
                  <h4>{member.name}</h4>
                  <p>
                    <a
                      href={member.lattes}
                      class="text-indigo-600"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Lattes
                    </a>{" "}
                    |{" "}
                    <a
                      href={member.page}
                      class="text-indigo-600"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Webpage
                    </a>{" "}
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
        <li></li>
      </ul>
    </div>
  )
}

export default Team
