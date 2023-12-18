const express = require('express')
const path = require('path')
const db = require('./db')

const app = express()
const PORT = 3000
const clientPath = path.resolve(__dirname, '../client/dist')

app.use(express.json())
app.use(express.static(clientPath))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'))
})

app.get('/api/tasks', db.getTasks)
app.post('/api/tasks', db.addTask)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})