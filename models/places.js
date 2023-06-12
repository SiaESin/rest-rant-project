const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cuisines: { type: String, required: true  }, //required causing an issue here
  pic: String,
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: Number
})

module.exports = mongoose.model('Place', placeSchema)
/*
module.exports = [{
    name: 'H-Thai-ML',
    city: 'Coronado',
    state: 'CA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/beachside-restaurant.jpg'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/cityview-restaurant.jpg'
  }]
  */