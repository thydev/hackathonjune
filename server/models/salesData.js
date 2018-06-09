const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// ProductId
// SaleQty
// SalesRev
// UnitPrice

const SalesDataSchema = new mongoose.Schema({
    ProductId: {
        type: Number,
        required: [true, 'ProductId is required']
    },
    SaleQty: {
        type: Number,
        required: [true, 'Sale quantity is required']
    },
    SalesRev: {
        type: Schema.Types.Decimal128,
        required: true
    },
    UnitPrice: {
        type: Schema.Types.Decimal128,
        required: true
    },
}, {
    timestamps: true
});


module.exports = mongoose.model('SalesData', SalesDataSchema);