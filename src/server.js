const express = require('express')
const routes = require('./routes')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static("public"))
server.use(express.urlencoded({ extended : true }))
server.use(routes)

server.set('view engine', 'njk')

nunjucks.configure("src/app/views", {
  express:server,
  autoescape: false,
  noCache: true,
})

server.listen('5000', () => {
  console.log('Server is running!')
})