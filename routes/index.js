var express = require('express');
var router = express.Router();
var {UserModel} = require('../db/models')

const md5 = require('blueimp-md5')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* router.post('/register',function(req,res){
  const {Username,Password} = req.body
  if(Username === 'admin'){
    res.send({code:1,msg:'This account already existed'})
  }
  else{
    res.send({code:0,data:{id:'23',Username,Password}})
  }
}) */


router.post('/register',function(req,res){

  const {Username,Password,type} = req.body
  UserModel.findOne({Username}).then((user) => {
    if(user!==null){
      res.send({code:1,msg:'This account already existed'});     
    }
    else{
      UserModel.insertMany(
        {
          Username,
          Password:md5(Password),
          type
        })
      .then((result) => {
        const data = {
          Username,
          type,
          id:result[0]._id
        }
        res.cookie('userid',result[0]._id,{maxAge: 1000*60*60*24})
        res.send({code:0,data:data})
      })
      .catch((err) => {
        console.log(err);
      });
      
    }
  }).catch((err) => {
    console.log(err);
  });

})


router.post('/login',function(req, res){
  const {Username,Password} = req.body
  UserModel.findOne({Username,Password:md5(Password)},{Password:0})
  .then((user) => {
    if(user!==null){
      res.cookie('userid',user._id,{maxAge:1000*60*60*24})
      res.send({code:0,data:user})
    }
    else{
      res.send({code:1,msg:'Account or Password is incorrect'})
    }
  }).catch((err) => {
    console.log(err);
  });
})


module.exports = router;
