import React from "react"
import SEO from "./SEO"

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <div className="flex flex-col min-h-screen">
        {children}
        <footer className="py-2 text-center text-gray-600 text-xs bg-gray-50">
          2020 &copy;{" "}
          <a href="http://www.patreo.dcc.ufmg.br/" target="__blank">
            PATREO Laboratory - UFMG
          </a>
        </footer>
      </div>
    </>
  )
}

export default Layout
