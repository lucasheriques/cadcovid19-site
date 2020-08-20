import React from "react"
import notFoundImage from "../images/not-found-image.svg"
import SiteLayout from "../components/site/SiteLayout"

export default () => {
  return (
    <SiteLayout>
      <main className="max-w-4xl flex-grow mx-auto flex flex-col justify-around">
        <img className="p-4" src={notFoundImage} alt="Page not found" />
      </main>
    </SiteLayout>
  )
}
