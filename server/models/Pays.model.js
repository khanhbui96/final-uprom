const mongoose = require('mongoose');

const Schema = mongoose.Schema

const PaysSchema = new Schema({
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
    mentor: {
        type: String,
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

const Pays = mongoose.model("Pays", PaysSchema);

module.exports = Pays