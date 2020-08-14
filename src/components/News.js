import React from "react"
import G1_logo from "../images/G1_logo.svg"

const News = ({ children }) => {
  return (
    <div
      className="max-w-6xl flex-grow flex-row-reverse mx-auto mt-4 grid sm:grid-cols-2 sm:grid-rows-1 justify-around items-center"
      id="news"
    >
      <div>
        <h2 className="px-4 text-2xl text-gray-500 sm:text-3xl">
          Divulgação na mídia:
        </h2>
      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-rows-1 sm:grid-cols-1">
        <div className="grid items-center justify-center sm:justify-end">
          <a
            href="https://g1.globo.com/mg/minas-gerais/noticia/2020/06/16/pesquisadores-da-ufmg-propoem-metodo-computadorizado-para-diagnostico-da-covid-19.ghtml"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="p-4 mb-4 sm:max-w-sm max-w-2"
              src={G1_logo}
              width="120"
              alt="noticia_g1"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default News
