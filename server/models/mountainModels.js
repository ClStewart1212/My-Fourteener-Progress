const mongoose = require('mongoose')

// require('dotenv').config()

mongoose
  .connect(
    'mongodb+srv://Clstewart1212:uFNOqWV7A18EdFZ1@fourteeners.vcwhax4.mongodb.net/',
    {
      // options for the connect method to parse the URI
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // sets the name of the DB that our collections are part of
      dbName: 'fourteeners',
    },
  )
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err))

const Schema = mongoose.Schema

const mountainSchema = new Schema({
  mountainId: Number,
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

const userSchemaV2 = new Schema({
  username: String,
  password: String,
  email: String,
  peaks: [
    {
      mountainId: Number,
      peak: String,
      notes: String,
      photos: [String],
      //store images as url string pointing to assets in local drive
      completionTime: String,
      //store completion time as string '00:00:00'
      completionDate: String,
    },
  ],
})

const Users = mongoose.model('users', userSchemaV2)

module.exports = {
  Mountains,
  Users,
}
