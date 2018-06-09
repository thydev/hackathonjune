const mongoose = require('mongoose'),
    MasterData = mongoose.model('MasterData');

module.exports = {
    getAll: (req, res) => {
        MasterData.find({}, (err, items) => {
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
        MasterData.find({
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
        let item = new MasterData(req.body);
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
        console.log(update);
        const opts = {
            runValidators: true,
            context: 'query'
        };
        MasterData.update({
            _id: new ObjectId(req.params.id)
        }, update, opts, function (err, item) {
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
        MasterData.remove({
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