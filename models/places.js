const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cuisines: { type: String, required: true  }, 
  pic: { type: String },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: {
    type: Number,
    min: [1800, 'That old?? Truly?'],
    max: [new Date().getFullYear(), 'This year is in the future, lol!']
  },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
})

placeSchema.methods.showEstablished = function(){
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

module.exports = mongoose.model('Place', placeSchema)
