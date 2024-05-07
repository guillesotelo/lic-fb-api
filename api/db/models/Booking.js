const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    serviceId: {
        type: String
    },
    service: {
        type: String
    },
    fullname: {
        type: String
    },
    price: {
        type: Number
    },
    discount: {
        type: String
    },
    email: {
        type: String
    },
    country: {
        type: String
    },
    phone: {
        type: String
    },
    date: {
        type: Date
    },
    isPaid: {
        type: Boolean,
        default: false
    },
    startTime: {
        type: Number
    },
    endTime: {
        type: Number
    },
    isEvent: {
        type: Boolean
    },
    eventId: {
        type: String
    },
    otherData: {
        type: String
    },
    removed: {
        type: Boolean,
        default: false
    },
}, { timestamps: true })

const Booking = mongoose.model('Booking', bookingSchema)

module.exports = Booking