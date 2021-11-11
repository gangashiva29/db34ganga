var Mango = require('../models/mango'); 
 
// List of all Mangoes 
exports.mango_list = async function(req, res) { 
    try {
        themangos = await Mango.find();
        res.send(themangos);
      } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
      } 
}; 
 
// for a specific Mango. 
exports.mango_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Mango detail: ' + req.params.id); 
}; 
 
// Handle Mango create on POST. 
exports.mango_create_post = async function(req, res) { 
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
exports.mango_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Mango delete DELETE ' + req.params.id); 
}; 
 
// Handle Mango update form on PUT. 
exports.mango_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Mango update PUT' + req.params.id); 
}; 

exports.mango_view_all_Page = async function(req, res) { 
    try{ 
        themangos = await Mango.find(); 
        res.render('mango', { title: 'mango Search Results', results: themangos }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
  }; 