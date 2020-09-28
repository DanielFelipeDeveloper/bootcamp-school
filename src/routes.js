const express = require('express')
const routes = express.Router()
const teachers = require('./app/controllers/teachers')

routes.get('/', (req, res) => {
  return res.redirect("/teachers")
})

routes.get('/teachers', teachers.index)
routes.get('/teachers/create', teachers.create)
routes.get('/teachers/:id', teachers.show)
routes.post('/teachers', teachers.post)

module.exports = routes