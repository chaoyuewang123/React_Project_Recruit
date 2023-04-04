const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/Recruit_Users')

mongoose.connection.once("open",function(){
    console.log('Database connect success');
});

const UserSchema = mongoose.Schema({
    Username: {type: String, required: true}, 
    Password: {type: String, required: true}, 
    type: {type: String, required: true}, 
    header: {type: String}, 
    post: {type: String}, 
    info: {type: String}, 
    company: {type: String}, 
    salary: {type: String} 
})

const UserModel = mongoose.model('users',UserSchema)





exports.UserModel = UserModel