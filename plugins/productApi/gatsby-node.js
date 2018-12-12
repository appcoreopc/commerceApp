const fetch = require("node-fetch")
const queryString = require("query-string")

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  configOptions
  ) => {
    const { createNode } = actions
    
    // Gatsby adds a configOption that's not needed for this plugin, delete it
    delete configOptions.plugins
    
    const productApiUrl = "http://localhost:3000/product";
    // Fetch a response from the apiUrl
    
    // Helper function that processes a photo to match Gatsby's node structure
    const mapDataToNode = product => {
      const nodeId = createNodeId(`pixabay-photo-${product.id}`)
      const nodeContent = JSON.stringify(product)
      const nodeData = Object.assign({}, product, {
        id: nodeId,
        parent: null,
        children: [],
        internal: {
          type: `ProductApi`,
          content: nodeContent,
          contentDigest: createContentDigest(product),
          username : 'jeremywoo'
        },
      })
      
      return nodeData
    }
    
    // Convert the options object into a query string
    const apiOptions = queryString.stringify(configOptions)
    
    // Join apiOptions with the Pixabay API URL
    const apiUrl = `https://pixabay.com/api/?${apiOptions}`
    
    return (
      
      fetch(productApiUrl)
      // Parse the response as JSON
      .then(response => response.json())
      // Process the JSON data into a node
      .then(data => {
        // For each query result (or 'hit')            
        data.forEach(p => {
          const nodeData = mapDataToNode(p);
          createNode(nodeData);
        });      
      })
      )      
    }