const mongoose = require('mongoose');
const logSchema = new mongoose.Schema({
    title: String,
    entry: String,
    shipIsBroken: { type: Boolean , required: true},
});
const Log = mongoose.model('Log', logSchema);
module.exports = Log;