import React from "react"
import ufmglogo from "../../images/ufmg.png"
import fapemiglogo from "../../images/fapemig.jpg"
import patreologo from "../../images/patreo.png"

const Partners = ({ children }) => {
  return (
    <div className="max-w-6xl sm:flex-row flex-grow mx-auto" id="partners">
      <div className="grid gap-4 grid-cols-1 grid-rows-3 sm:grid-rows-1 sm:grid-cols-3 mt-4 mb-4">
        <div className="grid items-center justify-center">
          <a
            href="http://www.patreo.dcc.ufmg.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="p-4" src={patreologo} width="120" alt="PATREO" />
          </a>
        </div>
        <div className="grid items-center justify-center">
          <a
            href="https://fapemig.br/pt/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={fapemiglogo} width="120" alt="FAPEMIG" />
          </a>
        </div>
        <div className="grid items-center justify-center mt-4 mb-4 ml-8 mr-8">
          <a href="https://ufmg.br/" target="_blank" rel="noopener noreferrer">
            <img src={ufmglogo} width="200" alt="UFMG" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Partners
