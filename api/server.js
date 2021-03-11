const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
const RateLimiter = require('express-rate-limit')
require('colors')

const server = express()

server.use(express.json())
server.use(helmet())
server.use(morgan('dev'))
server.use(cors())

module.exports = server
