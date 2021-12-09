const mongoose = require('mongoose')

const HotelSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        unique:true
        },
    location: String,
    rating: {
        type:Number,
        maxValue:5

    },
    vacancies: Boolean,
    tags: {
        type:[String]

    },
    rooms:[{roomNumber: Number, 
        size: String, 
        price: Number, 
        booked: Boolean}]
        },
        {timestamps:true}
    )

const Hotel = mongoose.model("Hotel", HotelSchema);
module.exports = Hotel;