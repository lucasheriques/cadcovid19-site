import React from "react"

const Contact = () => {
  return (
    <div className="max-w-6xl sm:flex-row mx-auto grid my-8" id="contact">
      <div>
        <h2 className="text-center px-4 text-2xl text-indigo-500 font-bold sm:text-3xl">
          Fale conosco
        </h2>
        <div className="sm:px-2">
          <p className="px-4 mt-8 text-lg text-gray-600 sm:mt-8">
            Algum texto para informar aos interessados sobre dúvidas, entrar em
            contato. Também devemos colocar algo para conseguir novos parceiros?
          </p>
        </div>
      </div>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-4">
        <form method="POST">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Nome
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="name"
            required
            placeholder="Nome"
          />
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
            required
            placeholder="Email"
          />
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="subject"
          >
            Assunto
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="subject"
            required
            placeholder="Assunto"
          />
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Mensagem
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            rows="5"
            placeholder="Digite sua mensagem"
            name="message"
            required
          />
          <button
            className="max-w-sm justify-center bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
