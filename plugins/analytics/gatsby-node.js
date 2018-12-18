const workboxBuild = require(`workbox-build`)

// this will get executed //
exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions
  console.log(actions);

  console.log('----------------------');
  console.log(configOptions);

  // Gatsby adds a configOption that's not needed for this plugin, delete it
  delete configOptions.plugins
}

// this will get executed too 
exports.createPages = ({ actions }) => {    if (process.env.NODE_ENV === `production`) {
      const { createPage } = actions

      createPage({
        path: `/offline-plugin-app-shell-fallback/`,
        component: slash(path.resolve(`${__dirname}/app-shell.js`)),
      })
    }

    console.log('create pages ');
  }

exports.onPostBuild = (args, pluginOptions) => {
  
  const swDest = `public/sw.js`
  return workboxBuild
    .generateSW({ swDest, ...combinedOptions })
    .then(({ count, size, warnings }) => {
      if (warnings) warnings.forEach(warning => console.warn(warning))

      const swAppend = fs
        .readFileSync(`${__dirname}/sw-append.js`, `utf8`)
        .replace(/%pathPrefix%/g, pathPrefix)

      fs.appendFileSync(`public/sw.js`, `\n` + swAppend)
      console.log(
        `Generated ${swDest}, which will precache ${count} files, totaling ${size} bytes.`
      )
    })
}