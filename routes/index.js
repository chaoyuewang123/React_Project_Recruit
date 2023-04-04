var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/register',function(req,res){
  const {Username,Password} = req.body
  if(Username === 'admin'){
    res.send({code:1,msg:'This account already existed'})
  }
  else{
    res.send({code:0,data:{id:'23',Username,Password}})
  }
})


module.exports = router;
