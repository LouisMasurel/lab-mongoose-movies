const mongoose = require ("mongoose")

const Schema = mongoose.Schema;

const celebritySchema = new Schema ({
  name : { type : String, required : true},
  occupation : { type : [String] },
  catchPhrase : { type : String, default : "Anonymous" },
}, {
  timestamps : true,
});

// create the "Book" model for the "books" collection 
const Celebrity = mongoose.model ("Celebrity", celebritySchema)

module.exports = Celebrity;