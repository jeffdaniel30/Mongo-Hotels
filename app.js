const mongoose = require('mongoose')
const db = mongoose.connection

mongoose.Promise = global.Promise

// Config
const mongoURI = 'mongodb://localhost:27017/hotel'

// Models
const Hotel = require('./models/hotels')
const hotelSeed = require('./models/seed.js')


// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, () => {
  console.log('The connection with mongod is established')
})

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'))
db.on('connected', () => console.log('mongo connected: ', mongoURI))
db.on('disconnected', () => console.log('mongo disconnected'))

// Hotel.create( hotelSeed, ( err , data ) => {
//   if ( err ) console.log ( err.message )
// console.log( "added provided hotel data" )
// }
// );

// Hotel.count({} , (err , data)=> {
//   if ( err ) console.log( err.message );
//    console.log ( `There are ${data} hotels in this database` );
// });


//// C
// db.hotel.insert({
//   name:"Jeffs Hotel",
//   location: "connecticut",
//   rating: 4,
//   vacancies:true,
//   tags: ["cozy", "big", "luxury"],
//   rooms:[{roomNumber: 23, size: "Really big", price: 1000, booked: false}]
// })

/////////// R
// db.hotels.find().pretty()

// db.hotesl.find({}{name: 1, _id: 0}).pretty()

//db.hotels.find({name: "Jeffs Hotel"}).pretty()

//db.hotels.find({vacancies: {$eq: true}}, {rating: 0}).pretty()

//// D

//db.hotels.remove({name: "Hotelicopter"})

//db.hotels.remove({name: "Hilbert's Hotel"})

//db.hotels.remove({location: "Colorado Rockies"})


//// U

//db.hotels.update({}, {name: "The Great Northern's" }, { rating: {$set: 5} })

//db.hotels.update({name: "Motel Bambi"}, {$set: {vacancies: false}})

//db.hotels.updateOne({location: 'White Bay, Oregon'},{$set: {rating :2} })