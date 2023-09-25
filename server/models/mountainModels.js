const mongoose = require('mongoose')

require('dotenv').config()

mongoose
  .connect(process.env.MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'fourteeners',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err))

const Schema = mongoose.Schema

const mountainSchema = new Schema({
  range: String,
  peak: String,
  class: Number,
  distance: Number,
  elevation_gain: Number,
  road: Number,
  link: String,
  url: String,
})

const Mountains = mongoose.model('mountains', mountainSchema)

const userSchema = new Schema({
  peak: String,
  notes: String,
  photos: String,
  //store images as url string pointing to assets in local drive
  completionTime: String,
  //store completion time as string '00:00:00'
  completionDate: String,
})

const Users = mongoose.model('users', userSchema)

module.exports = {
  Mountains,
  Users,
}
