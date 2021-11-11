var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var mango_controller = require('../controllers/mango'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/resource', api_controller.api); 
 
/// MANGO ROUTES /// 
 
// POST request for creating a Mango.  
router.post('/resource/mango', mango_controller.mango_create_post); 
 
// DELETE request to delete Mango. 
router.delete('/resource/mango/:id', mango_controller.mango_delete); 
 
// PUT request to update Mango. 
router.put('/resource/mango/:id', 
mango_controller.mango_update_put); 
 
// GET request for one Mango. 
router.get('/resource/mango/:id', mango_controller.mango_detail); 
 
// GET request for list of all Mango items. 
router.get('/resource/mango', mango_controller.mango_list); 
 
module.exports = router; 