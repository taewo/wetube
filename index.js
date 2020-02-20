const express = require('express')
const app = express()

const PORT = 4000

const handleListening = () => {
  console.log(`Listening on http://localhost:${PORT}`)
}

const handleHome = (req, res) => {
  res.send('hi')
}

const handleProfile = (req, res) => {
  res.send('handleProfile')
}

const betweenHome = (req, res, next) => {
  console.log('betweenHome')
  next()
}

app.use(betweenHome)

app.get('/', handleHome)
app.get('/profile', handleProfile)

app.listen(PORT, handleListening)