const path = require('path')

module.exports = {
    register : (req, res) => {
        return res.sendFile(path.join(__dirname, '..', 'views', 'registro.html'))
    },
    login : (req, res) => {
        return res.sendFile(path.join(__dirname, '..', 'views', 'login.html'))
    }
}