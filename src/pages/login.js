import React from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../services/auth"
import logo from "images/icon.svg"

class Login extends React.Component {
  state = {
    email: ``,
    password: ``,
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    console.log(this.state)
    event.preventDefault()
    if (handleLogin(this.state)) navigate("/app")
  }

  render() {
    if (isLoggedIn() != false) {
      navigate(`/app/`)
    }

    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img className="mx-auto h-12 w-auto" src={logo} alt="CADCOVID-19" />
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form
              method="POST"
              onSubmit={event => {
                this.handleSubmit(event)
              }}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  E-mail
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    type="text"
                    onChange={this.handleUpdate}
                    required
                    name="email"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Senha
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    type="password"
                    required
                    name="password"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    onChange={this.handleUpdate}
                  />
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember_me"
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label
                    htmlFor="remember_me"
                    className="ml-2 block text-sm leading-5 text-gray-900"
                  >
                    Lembrar-me
                  </label>
                </div>

                <div className="text-sm leading-5">
                  <a
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                  >
                    Esqueceu sua senha?
                  </a>
                </div>
              </div>

              <div className="mt-6">
                <span className="block w-full rounded-md shadow-sm">
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                  >
                    Login
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login

{
  /* <h1>Log in</h1>
            <form
              method="post"
              onSubmit={event => {
                this.handleSubmit(event)
              }}
            >
              <label>
                Username
                <input
                  type="text"
                  name="username"
                  onChange={this.handleUpdate}
                />
              </label>
              <label>
                Password
                <input
                  type="password"
                  name="password"
                  onChange={this.handleUpdate}
                />
              </label>
              <input type="submit" value="Log In" />
            </form> */
}
