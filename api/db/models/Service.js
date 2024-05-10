const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema({
    name: {
        type: String
    },
    title: {
        type: String
    },
    price: {
        type: Number
    },
    discount: {
        type: String
    },
    day: {
        type: String
    },
    time: {
        type: String
    },
    image: {
        type: String
    },
    description: {
        type: String
    },
    date: {
        type: Date
    },
    dates: {
        type: String
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
    link: {
        type: String
    },
    linkPassword: {
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

const Service = mongoose.model('Service', serviceSchema)

module.exports = Service