const mongoose = require('mongoose');

const Schema = mongoose.Schema

const CollectionsSchema = new Schema({
    time: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    money: {
        type: Number,
        require: true
    },
    person: {
        type: String,
        require: true
    },
    status: {
        type: Boolean,
        require: true
    }
});

const Collections = mongoose.model("Collections", CollectionsSchema);

module.exports = Collections