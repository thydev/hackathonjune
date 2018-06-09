const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// ProductId
// UPC
// Title
// ArtistName
// RelDate

const MasterDataSchema = new mongoose.Schema({
    ProductId: {
        type: [Number, 'ProductId should be numeric field'],
        required: [true, 'ProductId is required']
    },
    UPC: {
        type: String,
        validate: {
            validator: function (v) {
                return /\d{12}/.test(v);
            },
            message: 'UPC {VALUE} must be 12 digit numeric!'
        },
        required: [true, 'UPC is required']
    },
    Title: {
        type: String,
        required: [true, 'Title is required']
    },
    ArtistName: {
        type: String,
        required: [true, 'ArtisName is required']
    },
    RelDate: {
        type: [Date, 'Invalid date'],
        required: [true, 'RelDate is required']
    },
}, {
    timestamps: true
});


module.exports = mongoose.model('MasterData', MasterDataSchema);