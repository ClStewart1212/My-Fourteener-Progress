const mongoose = require('mongoose');

//TODO: create mongoDB database and add URI here
const MONGO_URI = 'URI';

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'fourteeners',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const mountainInfoSchema = new Schema({
  range: String,
  peak: String,
  difficulty: String,
  distance: Number,
  elevation_gain: String,
  roadType: String,
});

const MountainInfo = mongoose.model('mountainInfo', mountainInfoSchema);

const userInfoSchema = new Schema({
  peak: String,
  notes: String,
  photos: String,
  //store images as url string pointing to assets in local drive
  completionTime: String,
  //store completion time as string '00:00:00'
  completionDate: Date,
});

const UserInfo = mongoose.model('userInfo', userInfoSchema);

module.exports = {
  MountainInfo,
  UserInfo,
};
