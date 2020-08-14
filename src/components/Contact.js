import React, { useState } from "react"
import loadingImage from "../images/loading.svg"

const Contact = () => {
  const [inputs, setInputs] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
    loading: false,
    success: false,
    failure: false,
  })

  const handleChange = e => {
    const { name, value } = e.target
    setInputs(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()

    setInputs(prev => ({ ...prev, loading: true }))
    const { email, name, subject, message } = inputs

    const url = "https://mail-service-fawn.vercel.app/api/sendEmail"
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        email,
        name,
        subject,
        message,
      }),
    }

    fetch(url, options).then(response => {
      if (response.status === 200) {
        setInputs(prev => ({
          email: "",
          name: "",
          subject: "",
          message: "",
          loading: false,
          success: true,
        }))
        setTimeout(() => {
          setInputs(prev => ({ ...prev, success: false }))
        }, 5000)
      } else {
        setInputs(prev => ({ ...prev, loading: false, failure: true }))
      }
    })
  }

  const { loading, success } = inputs

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
        <form onSubmit={handleSubmit}>
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
            value={inputs.name}
            onChange={handleChange}
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
            value={inputs.email}
            onChange={handleChange}
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
            value={inputs.subject}
            onChange={handleChange}
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
            value={inputs.message}
            onChange={handleChange}
          />
          <div>
            <button
              className={`max-w-sm justify-center text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                loading
                  ? "cursor-not-allowed bg-indigo-300"
                  : "bg-indigo-500 hover:bg-indigo-700"
              }`}
              type="submit"
              disabled={inputs.loading}
            >
              Enviar
            </button>
            <img
              src={loadingImage}
              className={`inline ml-4 ${!loading ? "hidden" : ""}`}
              alt="Loading..."
              width="32"
            />
            <p
              className={`text-sm mt-3 text-green-600 font-semibold ${
                success ? "" : "hidden"
              }`}
            >
              A mensagem foi enviada com sucesso! Responderemos em breve.
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
