const express = require('express')
const routes = express.Router()

routes.get('/', (req, res) => {
  return res.redirect("/teachers")
})

routes.get('/teachers', (req, res) => {
  return res.render('teachers/show')
})

routes.get('/teachers/create', (req, res) => {
  return res.render('teachers/create')
})
module.exports = routes