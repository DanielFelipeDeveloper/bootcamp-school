const data = require('../../data.json')
const fs = require('fs')

module.exports = {
  create(req, res) {
    return res.render('teachers/create')
  },
  post(req, res) {
    const keys = Object.keys(req.body)

    for(key of keys) {
      if(req.body[key] == "") return res.send("Please Fill All Fields!")
    }

    data.teachers.push(req.body)

    fs.writeFile('src/data.json', JSON.stringify(data, null, 2), (err) => {
      if(err) return res.send('Write file error!')

      return res.redirect('/teachers')
    })
  },
  show(req, res) {
    return res.render('teachers/show')
  }
}