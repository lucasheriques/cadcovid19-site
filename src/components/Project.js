import React from "react"
import medicImage from "../images/medical-research.svg"
import aiImage from "../images/ai.svg"

const Project = () => {
  return (
    <main
      className="max-w-6xl flex-grow mx-auto flex flex-col justify-around"
      id="project"
    >
      <div className="sm:flex sm:flex-row-reverse sm:items-center">
        <div className="sm:px-2 text-center md:text-right">
          <h2 className="px-4 pt-5 text-2xl text-indigo-500 font-bold sm:text-3xl">
            Sobre o projeto
          </h2>
          <p className="px-4 mt-8 text-lg text-gray-600 sm:mt-8 ">
            A proposta do projeto CADCOVID-19 é fornecer aos profissionais de
            saúde um sistema capaz de auxiliar o diagnósticos de doenças
            pulmonares a partir de imagens, com foco em casos relacionados ao
            surto de COVID-19. Seu principal objetivo é oferecer um sistema
            online para a centralização dos dados de raio-x e tomografias de
            pacientes diagnosticados com COVID-19 ou casos suspeitos.
          </p>
        </div>
        <img
          className="w-full max-w-lg mt-16  sm:w-1/2"
          src={medicImage}
          alt="Gatsby and Tailwind CSS together"
        />
      </div>
      <div className="sm:flex sm:flex-row sm:items-center">
        <div className="sm:px-2 text-center md:text-left">
          <p className="px-4 mt-8 text-lg text-gray-600 sm:mt-8 ">
            Com o auxílio de visão computacional e algoritmos de inteligência
            artificial, o sistema irá permitir que pesquisadores e profissionais
            da saúde façam upload de imagens médicas, que serão integradas ao
            repositório. A partir dessas imagens será gerado um relatório com
            proprietades extraídas delas, de modo a auxiliar o diagnóstico de
            doenças pulmonares.
          </p>
        </div>
        <img
          className="w-full max-w-lg mb-16  sm:w-1/2"
          src={aiImage}
          alt="Gatsby and Tailwind CSS together"
        />
      </div>
    </main>
  )
}

export default Project
