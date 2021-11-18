var express = require('express');
const mango_controlers = require('../controllers/mango');
var router = express.Router();

/* GET mangoes */
router.get('/', mango_controlers.mango_view_all_Page);

router.get('/detail', mango_controlers.mango_view_one_Page);

router.get('/create', mango_controlers.mango_create_Page); 

router.get('/update', mango_controlers.mango_update_Page); 

router.get('/delete', mango_controlers.mango_delete_Page); 


module.exports = router;