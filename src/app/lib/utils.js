module.exports = {
  age(timestamp) {
    const today = new Date()
    const birthDate = new Date(timestamp)

    let age = today.getUTCFullYear() - birthDate.getUTCFullYear()
    let month = today.getUTCMonth() - birthDate.getUTCMonth()

    if(month < 0 || month == 0 && today.getUTCDate() < birthDate.getUTCDate() ) {
      age -= 1
    }

    return age
  },
  graduation(data) {
    switch(data) {
      case 'medio':
      return 'Ensino Médio'
      break
      case 'superior':
      return 'Ensino Superior Completo'
      break
      case 'mestre':
      return 'Mestrado'
      break
      case 'doutor':
      return 'Doutorado'
      break
    }
  },
  date(timestamp) {
    const date = new Date(timestamp)

    year = date.getUTCFullYear()
    month = `0${date.getUTCMonth() + 1}`.slice(-2)
    day = `0${date.getUTCDate()}`.slice(-2)

    return `${year}-${month}-${day}`
  }
}