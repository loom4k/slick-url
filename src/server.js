const express = require('express')

const config = require('./config/config.json')

const app = express()

const port = config.port

app.listen(port, () => {
    console.log(`App listening to port ` + port)
})