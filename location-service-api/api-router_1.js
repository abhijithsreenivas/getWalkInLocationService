const express = require('express');

function apiRouter(database) {
  const router = express.Router();
  var newcustomer = function(num){
      this.num = num;
      this.configuredMsgs = 5;
      this.messages = [];
  }

  var newStore = function(store){
    this.storename = store;
    this.Location = {};
    this.Location.Lattitude = "12.930980";
    this.Location.Longitude = "77.623642";
    this.customers = ['9890323223','5489327854'];
  }

  // Location Service  All CRUD OPERATIONS
  router.get('/customerLocations', (req, res) => {
    return res.json(database.customerLocations.find())
  });

  router.get('/customerLocations/:phone', (req, res) => {
    var phone = req.params.phone;
    const obj = database.customerLocations.find({phone_number: phone});
    return res.json(obj);
  });

  router.post('/customerLocations', (req, res) => {
    const customerLoc = req.body;
    const newLocations = database.customerLocations.save(customerLoc);
    var newUser = new newcustomer(newLocations.phone_number);
    database.customers.save(newUser);
    res.status(201).json(newLocations);
  });

  router.put('/customerLocations/:phone', (req, res) => {
    var phone = req.params.phone;
    var query = {phone_number: phone};
    var dataToBeUpdate = req.body;
    var option = {multi: false};
    var update = database.customerLocations.update(query,dataToBeUpdate,option);
    res.status(200).json(update);
  });

  router.delete('/customerLocations/:phone', (req, res) => {
    var phone = req.params.phone;
    var rem = database.customerLocations.remove({phone_number: phone}, true);
    return res.status(202).json(rem);
  });



  // Customers Service  All CRUD OPERATIONS
  router.get('/customers', (req, res) => {
    return res.json(database.customers.find())
  });

  router.get('/customers/:phone', (req, res) => {
    var phone = req.params.phone;
    const obj = database.customers.find({num: phone});
    return res.json(obj);
  });

  router.post('/customers', (req, res) => {
    const customerLoc = req.body;
    const newLocations = database.customers.save(customerLoc);
    res.status(201).json(newLocations);
  });


  router.post('/customers/:phone/msg', (req, res) => {
    var phone = req.params.phone;
    var query = {num: phone};
    var option = {multi: false};
    const obj = database.customers.find({num: phone});
    var newMessage = req.body.message;
    var configuredMsgs = obj[0].configuredMsgs;
    
    if(obj[0].messages.length<=configuredMsgs){
      obj[0].messages.push(newMessage);
    }
    var update = database.customers.update(query,obj[0],option);
    res.status(201).json(update);
  });

  router.put('/customers/:phone', (req, res) => {
    var phone = req.params.phone;
    var query = {num: phone};
    var dataToBeUpdate = req.body;
    var option = {multi: false};
    var update = database.customers.update(query,dataToBeUpdate,option);
    res.status(200).json(update);
  });

  router.delete('/customers/:phone', (req, res) => {
    var phone = req.params.phone;
    var rem = database.customers.remove({num: phone}, true);
    return res.status(202).json(rem);
  });

  
  // Store Service  All CRUD OPERATIONS
  router.get('/stores', (req, res) => {
    return res.json(database.stores.find())
  });

  router.get('/stores/:store', (req, res) => {
    var store = req.params.store;
    const obj = database.stores.find({storename: store});
    return res.json(obj);
  });

  router.post('/stores', (req, res) => {
    const store = req.body.store;
    const savStore = database.stores.save(new newStore(store));
    res.status(201).json(savStore);
  });

  router.put('/stores/:store', (req, res) => {
    
  });

  router.delete('/stores/:store', (req, res) => {
    var store = req.params.store;
    var rem = database.stores.remove({storename: store}, true);
    return res.status(202).json(rem);
  });




  return router;
}

module.exports = apiRouter;
