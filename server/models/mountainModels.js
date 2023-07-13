const mongoose = require('mongoose');

const MONGO_URI =
  'mongodb+srv://Clstewart1212:Hermitage7142%21@fourteeners.vcwhax4.mongodb.net/';

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

const mountainSchema = new Schema({
  range: String,
  peak: String,
  class: Number,
  distance: Number,
  elevation_gain: Number,
  road: Number,
  link: String,
});

const Mountains = mongoose.model('mountains', mountainSchema);

const userSchema = new Schema({
  peak: String,
  notes: String,
  photos: String,
  //store images as url string pointing to assets in local drive
  completionTime: String,
  //store completion time as string '00:00:00'
  completionDate: String,
});

const Users = mongoose.model('users', userSchema);

module.exports = {
  Mountains,
  Users,
};
//link for possiblly importing json onto mongoDB

// mongoimport --uri mongodb+srv://Clstewart1212:Hermitage7142%21@fourteeners.vcwhax4.mongodb.net/fourteeners --collection mountains --type json --file mountains.json

//keep getting this error so I'm giving up for now
// error inserting documents: Unsupported OP_QUERY command: insert. The client driver may require an upgrade. For more details see https://dochub.mongodb.org/core/legacy-opcode-removal
