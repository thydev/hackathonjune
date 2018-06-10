const mongoose = require('mongoose'),
    fs = require('fs'),
    path = require('path');

module.exports = (() => {
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost:27017/ProductMasterSalesData');

    // Use your own username and passowrd
    // mongoose.connect('mongodb+srv://username:password@cluster0-yi1u9.mongodb.net/ProductMasterSalesData?retryWrites=true');

    // create a variable that points to the models folder
    const models_path = path.join(__dirname, './../models');
    // read all of the files in the models_path and require (run) each of the javascript files
    fs.readdirSync(models_path).forEach((file) => {
        if (file.indexOf('.js') >= 0) {
            // require the file (this runs the model file which registers the schema)
            require(models_path + '/' + file);
        }
    });
})();