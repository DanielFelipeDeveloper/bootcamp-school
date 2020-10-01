const data = require('../../data.json')
const fs = require('fs')
const { graduation, age, date } = require('../lib/utils')
const Intl = require('intl')

module.exports = {
  index(req, res) {
    return res.render('layout')
  },
  create(req, res) {
    return res.render('teachers/create')
  },
  post(req, res) {
    const keys = Object.keys(req.body)

    for(key of keys) {
      if(req.body[key] == "") return res.send("Please Fill All Fields!")
    }

    let {
      avatar_url, 
      name, 
      birth, 
      graduation,
      typeClass, 
      accompaniment, 
      actingArea 
    } = req.body

    birth = Date.parse(birth)

    const id = Number(data.teachers.length + 1)
    const created_at = Date.now()

    data.teachers.push({
      id,
      avatar_url,
      name,
      birth,
      graduation,
      typeClass,
      accompaniment,
      actingArea,
      created_at
    })

    fs.writeFile('src/data.json', JSON.stringify(data, null, 2), (err) => {
      if(err) return res.send('Write file error!')

      return res.redirect('/teachers')
    })
  },
  show(req, res) {
    const { id } = req.params

    const foundTeacher = data.teachers.find((teacher) => {
      return teacher.id == id
    })

    if(!foundTeacher) return res.send("Teacher not found!")

    const teacher = {
      ...foundTeacher,
      graduation: graduation(foundTeacher.graduation),
      age: age(foundTeacher.birth),
      created_at: new Intl.DateTimeFormat('pt-BR').format(foundTeacher.created_at),
      accompaniment: foundTeacher.accompaniment.split(',')
    }    

    return res.render('teachers/show', { teacher })
  },
  edit(req, res) {
    const { id } = req.params

    const foundTeacher = data.teachers.find((teacher) => {
      return teacher.id == id
    })

    if(!foundTeacher) return res.send("Teacher not found!")

    const teacher = {
      ...foundTeacher,
      birth: date(foundTeacher.birth)
    }

    return res.render(`teachers/edit`, { teacher })
  },
  update(req, res) {
    const { id } = req.body
    let index = 0

    const foundTeacher = data.teachers.find((teacher, foundIndex) => {
      if(teacher.id == id) index = foundIndex
      return true
    })

    if(!foundTeacher) return res.send('Teacher not found!')

    const teacher = {
      ...foundTeacher,
      ...req.body,
      birth: Date.parse(req.body.birth),
      id: Number(req.body.id)
    }

    data.teachers[index] = teacher

    fs.writeFile('src/data.json', JSON.stringify(data, null, 2), (err) => {
      if (err) return res.send('Write file error!')

      return res.redirect(`/teachers/${id}`)
    })
  }
}