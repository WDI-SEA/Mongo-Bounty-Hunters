const mongoose = require('mongoose')

const BountySchema = new mongoose.Schema({
    name: {
        type: String
    },
    wantedFor: {
        type: String
    },
    client: {
        type: String
    },
    reward: {
        type: Number
    },
    ship: {
        type: String
    },
    hunters: {
        type: Array
    },
    captured: {
        type: Boolean
    }
}, {
    timestamps: true
})

module.exports = BountySchema