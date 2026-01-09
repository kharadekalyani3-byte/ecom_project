var express = require("express");
var exe = require('../conn');
var router = express.Router();
router.get('/',function(req,res){
    res.render('admin/index');
});

router.get('/category',function(req,res){
    res.render('admin/category.ejs');
});

module.exports = router;
