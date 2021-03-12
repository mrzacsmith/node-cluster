const cluster = require('cluster')
const os = require('os')
require('dotenv').config()
require('colors')

if (cluster.isMaster) {
  let cpuCount = os.cpus().length

  console.log(`Master cluster is setting up ${cpuCount} workers...`.america)
  for (let i = 0; i < cpuCount; i++) {
    cluster.fork()
  }

  cluster.on('online', (workder) => {
    console.log(`Worker ${worker.process.pid} is online!`.green)
  })

  cluster.on('exit', (worker, code, signal) => {
    console.log(
      `Worker ${worker.process.pid} died with code: ${code},\nand signal: ${signal}`
        .red
    )
    console.log(`Starting a new worker!`)
    cluster.fork()
  })
} else {
  const server = require('./api/server')

  const PORT =
    process.env.PORT ||
    server.listen(PORT, () => {
      console.log(`\n** Server is listening on port ${PORT}`.america)
    })
}
