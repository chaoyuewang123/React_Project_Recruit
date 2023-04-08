module.exports = function (server) {
    // 得到 IO 对象
    const io = require("socket.io")(server, { cors: true })
    io.listen(4001)
    io.on('connection', socket => {
        console.log('有客户端连接成功了')
      
        // 监听客户端发送的消息
        socket.on('sendMsg', data => {
          console.log('服务器接收到消息:', data)
          
          // 处理完消息后，向客户端返回数据
          socket.emit('receiveMsg', {
            msg: `你好，${data.name}，服务器已经接收到你的消息了！`
          })
        })
      })
    }