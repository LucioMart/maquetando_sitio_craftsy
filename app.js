const express = require('express')
const path = require('path')
const port = 3030

const app = express()

/*  Routing  */

const mainRouter = require('./routes/main')
const productsRouter = require('./routes/products')
const usersRouter = require('./routes/users')

app.use('/', mainRouter)

// app.use('/products', productsRouter)

app.use('/users', usersRouter)

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'home.html'))
// })

// app.get('/registro', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'registro.html'))
// })

// app.get('/login', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'login.html'))
// })

/*  settings  */ 

app.use(express.static('public'))







app.listen(port, () => console.log('Servidor corriendo en el puerto ' + port))