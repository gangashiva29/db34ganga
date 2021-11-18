var Mango = require('../models/mango');

// List of all Mangoes 
exports.mango_list = async function (req, res) {
  try {
    themangos = await Mango.find();
    res.send(themangos);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

// for a specific Mango. 
exports.mango_detail = async function (req, res) {
  console.log("detail" + req.params.id)
  try {
    result = await Mango.findById(req.params.id)
    res.send(result)
  } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
  }
};

// Handle Mango create on POST. 
exports.mango_create_post = async function (req, res) {
  let document = new Mango();
  // We are looking for a body, since POST does not have query parameters.
  // Even though bodies can be in many different formats, we will be picky
  // and require that it be a json object
  document.Brand = req.body.Brand;
  document.size = req.body.size;
  document.price = req.body.price;
  console.log(req.body);
  try {
    let result = await document.save();
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

// Handle Mango delete form on DELETE. 
exports.mango_delete = async function (req, res) {
  console.log("delete " + req.params.id)
  try {
    result = await Mango.findByIdAndDelete(req.params.id)
    console.log("Removed " + result)
    res.send(result)
  } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
  }
};

// Handle Mango update form on PUT. 
exports.mango_update_put = async function (req, res) {
  console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`)
  try {
    let toUpdate = await Mango.findById(req.params.id)
    // Do updates of properties 
    if (req.body.Brand) toUpdate.Brand = req.body.Brand;
    if (req.body.price) toUpdate.price = req.body.price;
    if (req.body.size) toUpdate.size = req.body.size;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
  } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`);
  }
};

exports.mango_view_all_Page = async function (req, res) {
  try {
    themangos = await Mango.find();
    res.render('mango', { title: 'mango Search Results', results: themangos });
  }
  catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

exports.mango_view_one_Page = async function (req, res) {
  console.log("single view for id " + req.query.id)
  try {
    result = await Mango.findById(req.query.id)
    res.render('mangodetail',
      { title: 'Mango Detail', toShow: result });
  }
  catch (err) {
    res.status(500)
    res.send(`{'error': '${err}'}`);
  }
};

exports.mango_create_Page = function (req, res) {
  console.log("create view")
  try {
    res.render('mangocreate', { title: 'Mango Create' });
  }
  catch (err) {
    res.status(500)
    res.send(`{'error': '${err}'}`);
  }
};