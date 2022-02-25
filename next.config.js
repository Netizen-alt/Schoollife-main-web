const isProd = process.env.NODE_ENV === "production";
const path = require('path')

module.exports = {
  assetPrefix: isProd ? "/bot" : "/",
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  reactStrictMode: true,
  target: 'serverless',
  exportPathMap: () => ({
    "/": {
      page: "/",
    },
  }),
  images: {
    loader: 'imgix',
  },
}

