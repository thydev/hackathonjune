const mongoose = require('mongoose'),
    SalesData = mongoose.model('SalesData');

module.exports = {

    getAll: (req, res) => {
        SalesData.find({}, (err, items) => {
            if (!err) {
                res.json({
                    message: 'Success',
                    data: items
                });
            } else {
                res.json({
                    message: 'Error',
                    error: err
                })
            }
        }).sort({
            title: 1
        });
    },

    getById: (req, res) => {
        const ObjectId = mongoose.Types.ObjectId;
        SalesData.find({
                _id: new ObjectId(req.params.id)
            })
            .exec((err, item) => {
                if (!err) {
                    res.json({
                        message: 'Success',
                        data: item
                    });
                } else {
                    res.json({
                        message: 'Error',
                        error: err
                    })
                }
            });
    },

    create: (req, res) => {
        let item = new SalesData(req.body);
        item.save(err => {
            if (!err) {
                res.json({
                    message: 'Success',
                    data: item
                })
            } else {
                res.json({
                    message: 'Error',
                    error: err
                })
            }
        });
    },

    updateById: (req, res) => {
        const ObjectId = mongoose.Types.ObjectId;
        const update = req.body;
        SalesData.update({
            _id: new ObjectId(req.params.id)
        }, update, function (err, item) {
            if (!err) {
                res.json({
                    message: 'Success',
                    data: item
                });
            } else {
                res.json({
                    message: 'Error',
                    error: err
                })
            }
        });
    },

    removeById: (req, res) => {
        const ObjectId = mongoose.Types.ObjectId;
        SalesData.remove({
                _id: new ObjectId(req.params.id)
            })
            .exec((err, item) => {
                if (!err) {
                    res.json({
                        message: 'Success',
                        data: item
                    });
                } else {
                    res.json({
                        message: 'Error',
                        error: err
                    })
                }
            });
    },

}