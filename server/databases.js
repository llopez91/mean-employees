const mongoose = require('mongoose')

const URI = 'mongodb://localhost:27015/mean-crud'

mongoose.connect(URI, { useNewUrlParser: true})
    .then(db => console.log('DB is connect'))
    .catch(err => console.error(err))

module.exports = mongoose