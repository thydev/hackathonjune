const masters = require('../controllers/masterDatas');
const sales = require('../controllers/salesDatas');

module.exports = (app) => {
    const baseUrl = '/api/';

    // MasterData routes
    app.get(baseUrl + 'masters', masters.getAll);
    app.get(baseUrl + 'masters/:id', masters.getById);
    app.post(baseUrl + 'masters', masters.create);
    app.put(baseUrl + 'masters/:id', masters.updateById);
    app.delete(baseUrl + 'masters/:id', masters.removeById);
    app.delete(baseUrl + 'masters/products/:ProductId', masters.removeByProductId);

    // SalesData Routes
    app.get(baseUrl + 'sales', sales.getAll);
    // app.get(baseUrl + 'sales/:id', sales.getById);
    app.get(baseUrl + 'sales/products/:ProductId', sales.getByProductId);
    app.post(baseUrl + 'sales', sales.create);
    app.put(baseUrl + 'sales/:id', sales.updateById);
    // app.delete(baseUrl + 'sales/:id', sales.removeById);
    app.delete(baseUrl + 'sales/products/:ProductId', sales.removeByProductId);

}