const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require("./tailwind.config.js")
const path = require("path")

const { theme } = resolveConfig(tailwindConfig)

module.exports = {
  siteMetadata: {
    title: "CADCOVID-19",
    author: "PATREO",
    description:
      "Um sistema para auxiliar o dignóstico através de dados de imagens de raio-x e tomografias",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Projeto CADCOVID-19",
        short_name: "CADCOVID-19",
        start_url: "/",
        background_color: theme.colors.white,
        theme_color: theme.colors.indigo[500],
        icon: "static/icon.svg",
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        pages: path.join(__dirname, "src/pages"),
        components: path.join(__dirname, "src/components"),
        images: path.join(__dirname, "src/images"),
        services: path.join(__dirname, "src/services"),
      },
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] },
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
