/**
 * @author  liyong
 * @description index.js
 * @date  2022-11-16 16:45
 * @update  2022-11-16 16:45
 */
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('欢迎使用微信云托管！')
})

const port =  8080
app.listen(port, () => {
    console.log('服务启动成功，端口：', port)
})
