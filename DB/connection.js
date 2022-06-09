const mongoose = require('mongoose')

const connectionDB = () => {
  return mongoose
    .connect(process.env.Connection_Url)
    .then(re => console.log('DB connected'))
    .catch(err => console.log('Fail to DB connect'))
}

module.exports= connectionDB
