require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./routes')
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('<h1> Hello World </h1>')
  })

app.use('/api/', router)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(` Server running in port ${PORT}`)
})
