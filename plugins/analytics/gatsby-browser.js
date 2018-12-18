

exports.registerServiceWorker = () => true

exports.onServiceWorkerActive = ({
    getResourceURLsForPathname,
    serviceWorker,
  }) => {
    // grab nodes from head of document
    const nodes = document.querySelectorAll(`
      head > script[src],
      head > link[href],
      head > style[data-href]
    `)
    console.log('plugin from brwser component ');

    
  }
