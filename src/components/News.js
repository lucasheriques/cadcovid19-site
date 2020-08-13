import React from "react"
import G1_logo from "../images/G1_logo.svg"

const News = ({ children }) => {
  return (
    <div className="max-w-6xl sm:flex-row flex-grow mx-auto" id="news">
      <div className="grid gap-4 grid-cols-1 sm:grid-rows-1 sm:grid-cols-1 mt-4 m">
        <div className="grid items-center justify-center">
          <a
            href="https://g1.globo.com/mg/minas-gerais/noticia/2020/06/16/pesquisadores-da-ufmg-propoem-metodo-computadorizado-para-diagnostico-da-covid-19.ghtml"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="p-4 mb-5"
              src={G1_logo}
              width="150"
              alt="noticia_g1"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default News
