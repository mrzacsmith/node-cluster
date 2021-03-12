const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
const RateLimiter = require('express-rate-limit')
require('colors')

const server = express()

// db connection

// middleware
server.use(express.json())
server.use(helmet())
server.use(morgan('dev'))
server.use(cors())

// rate limit
const limiter = new RateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 100,
  delay: 0,
})

// routes

module.exports = server
