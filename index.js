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

app.get('/', handleHome)
app.get('/profile', handleProfile)

app.listen(PORT, handleListening)