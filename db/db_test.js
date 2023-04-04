const mongoose = require('mongoose')
const md5 = require('blueimp-md5')

mongoose.connect('mongodb://127.0.0.1:27017/Recruit_Users')

mongoose.connection.once("open",function(){
    console.log('Database connect success');
});

const UserSchema = mongoose.Schema({
    Username:{type: String, required: true},
    Password:{type: String, required: true},
    type: {type:String,required: true},
    header:{type:String}
})

const UserModel = mongoose.model('users',UserSchema)

function testSave(){
   const userModel = new UserModel({
        Username:'aa',
        Password:md5('555'),
        type:'2'
    })
    userModel.save()
}

//testSave()


function testFind(){
    UserModel.find().then((users) => {
        console.log(users);
}).catch((err) => {
    console.log(err);
});
   // console.log(a);
    UserModel.findOne({Username:'bb'}).then((user) => {
        console.log(user);
    }).catch((err) => {
        console.log(err);
    });
}
//testFind()

function testUpdate(){
    UserModel.updateOne({Username:'aa'},{Username:'jack'}).then((user) => {
        console.log(user);
    }).catch((err) => {
        console.log(err);
    });
}
//testUpdate()

function testDelete(){
    UserModel.deleteOne({Username:'jack'}).then((user) => {
        console.log(user);
    }).catch((err) => {
        console.log(err);
    });
}
//testDelete()

function testinster(){
    UserModel.insertMany({
        Username:'aaaa',
        Password:md5('5s55'),
        type:'2'
    }).then((result) => {
        console.log(result,result[0]._id);
        // 处理插入结果
      })
      .catch((err) => {
        console.log(err);
        // 处理错误
      });
}

testinster();

/* const conn = mongoose.connection

conn.on('connected',function(){
    console.log('success')
}) */