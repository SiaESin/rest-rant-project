const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
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
      
    res.render('places/index', {places})
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
  res.send()
})

module.exports = router