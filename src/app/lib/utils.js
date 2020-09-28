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
  }

}