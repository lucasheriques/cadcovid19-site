const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require("./tailwind.config.js")

const { theme } = resolveConfig(tailwindConfig)

module.exports = {
  siteMetadata: {
    title: "CADCOV-19",
    author: "PATREO",
    description:
      "Um sistema para auxiliar o dignóstico através de dados de imagens de raio-x e tomografias",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Projeto CADCOV-19",
        short_name: "CADCOV-19",
        start_url: "/",
        background_color: theme.colors.white,
        theme_color: theme.colors.indigo[500],
        icon: "static/icon.svg",
      },
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
    "gatsby-plugin-webpack-bundle-analyser-v2",
    `gatsby-plugin-offline`,
  ],
}
