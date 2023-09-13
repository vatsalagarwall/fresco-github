const mongoose = require('mongoose')

const ReservationSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    people: Number,
    // datetime: String,
})

const ReservationModel = mongoose.model('reservations', ReservationSchema);

module.exports = ReservationModel;