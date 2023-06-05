require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.render('home')
})

app.use(express.static('public'))
app.use(express.urlencoded({ extended:true }))
app.use('/places', require('./controllers/places'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


app.get('*', (req, res) => {
    res.render('error404')
})

app.listen(process.env.PORT)
