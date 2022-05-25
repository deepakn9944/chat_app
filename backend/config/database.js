const mongoose = require('mongoose');

const databaseConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology : true
    }).then(() => {
        console.log('Mongodb Database Connected')
    }).catch(error => {
        caonsole.log(error)
    })
}
module.exports = databaseConnect;