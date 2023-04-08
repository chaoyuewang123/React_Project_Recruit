const { ChatModel } = require('../db/models')
module.exports = function (server) {

  const io = require("socket.io")(server, { cors: true })
  io.listen(4001)
  io.on('connection', socket => {
    console.log('有客户端连接成功了')

    socket.on('sendMsg', ({ from, to, content }) => {
      console.log('服务器接收到消息:', { from, to, content })
      const chat_id = [from, to].sort().join('_')
      const creat_time = Date.now()
      new ChatModel({ from, to, content, chat_id, creat_time }).save()
        .then((chatMsg) => {
          io.emit('receiveMsg', chatMsg)
        }).catch((err) => {
          console.log(err);
        })
    })
  })
}