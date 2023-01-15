

const isValidPhone = (Mobile) => {
    return /^[6-9]\d{9}$/.test(Mobile)
  }

  const isValidEmail = (Email) => {
    return  /^([A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6})+$/.test(Email)
  }

  const isValidPassword= (Password) => {
    return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$/.test(Password)
  }

  const isValidName = (String) => {
    return /\d/.test(String)
  }

  module.exports={isValidName,isValidPassword, isValidEmail,isValidPhone}


  // "start": "node index.js",
    // "dev": "nodemon index.js"   