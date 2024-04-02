var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/session' , function(req , res){
   req.session.ban = true;
   res.send('session is applied')
})

router.get('/check' , function(req, res){
  if(req.session.ban){
    res.send('session is true')
  }else{
    res.send('session is false')
  }
})

router.get('/remove', function(req, res){
req.session.destroy(function(err){
  if(err){
    console.log('error occurred',err)
    res.sendStatus(500)
  }else{
    res.send('session is destroyed')
    // res.redirect('/login')
  }
})
})
module.exports = router;
