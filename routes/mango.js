var express = require('express');
const mango_controlers = require('../controllers/mango');
var router = express.Router();

/* A little function to check if we have an authorized user and continue on 
or 
// redirect to login. */
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
/* GET mangoes */
router.get('/', mango_controlers.mango_view_all_Page);

router.get('/detail', mango_controlers.mango_view_one_Page);

router.get('/create', secured, mango_controlers.mango_create_Page); 

router.get('/update', secured, mango_controlers.mango_update_Page); 

router.get('/delete', secured, mango_controlers.mango_delete_Page); 




module.exports = router;