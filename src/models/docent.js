const mongoose = require('mongoose');
const Campus = require('./campus');

const DocentSchema = new mongoose.Schema({
    voornaam: { type: string },
    achternaam: { type: string },
    campussen: [{ type: mongoose.Schema.Types.ObjectId, ref: Campus }],
}, {
    collection: 'docent'
});

module.exports = mongoose.model('Docent', DocentSchema);