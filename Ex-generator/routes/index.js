var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/error' , function(req, res){
  throw new Error('Handle this error')
})

router.get('/profile/:username' , function(req , res){
  res.send(`Hello from ${req.params.username}`)
})

router.get('/cookies', function(req , res){
  res.cookie('Name' , 'abrar Khan')
  res.send('cookies setted')
})

router.get('/read', function(req , res){
  res.send(req.cookies.Name)
})

router.get('/delete', function(req , res){
  res.clearCookie('Name')
  res.send('cookies deleted ')
})



module.exports = router;
