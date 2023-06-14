const db = require('../models')

db.Place.create([
    {
        name: 'H-Thai-ML',
        city: 'Coronado',
        state: 'CA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/beachside-restaurant.jpg',
        founded: 1989
    }, {
        name: 'Coding Cat Cafe',
        city: 'San Diego',
        state: 'CA',
        cuisines: 'Coffee, Bakery',
        pic: '/images/cityview-restaurant.jpg',
        founded: 2020
    }
    ])
    .then(() => {
        console.log('Success!')
        process.exit()
    })
    .catch(err => {
        console.log('Oh no no no no no!', err)
        process.exit()
    })