const mongoose = require('mongoose')
const config = require('./config.json')
const dbUri = config.dbUri

mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const connection = mongoose.connection

module.exports = connection