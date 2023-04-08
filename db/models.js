const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/Recruit_Users')

mongoose.connection.once("open",function(){
    console.log('Database connect success');
});

const UserSchema = mongoose.Schema({
    Username: {type: String, required: true}, 
    Password: {type: String, required: true}, 
    type: {type: String, required: true}, 
    Avatar: {type: Object}, 
    Position: {type: String}, 
    Required: {type: String}, 
    Company: {type: String}, 
    Salary: {type: String},
    JobSearch:{type:String},
    PersonalIntroduction:{type:String}
})

const UserModel = mongoose.model('users',UserSchema)





exports.UserModel = UserModel



const chatSchema = mongoose.Schema({
    from: {type: String, required: true}, 
    to: {type: String, required: true}, 
    chat_id: {type: String, required: true}, 
    content: {type: String, required: true}, 
    read: {type:Boolean, default: false}, 
    create_time: {type: Number} 
    })

    const ChatModel = mongoose.model('chat', chatSchema)

    exports.ChatModel = ChatModel