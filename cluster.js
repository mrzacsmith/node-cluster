const cluster = require('cluster')
const os = require('os')

if (cluster.isMaster) {
  let cpuCount = os.cpus().length

  // create a worker for each CPU
  for (let i = 0; i < cpuCount; i++) {
    cluster.fork()
  }

  // listen for dying workers
  cluster.on('exit', () => {
    cluster.fork()
  })
} else {
  require('./index')
}

/*
 * For normal local development, use the index.js entry
 * for production deployment, use the cluster.js as entry to create clusters
 */
