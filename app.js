const express = require('express')
const app = express()
const port = 2000

app.get('/', (req, res) => {
    res.json("hello world!")
})

app.get("/hello", (req, res) => {
    // res.header("Content-Type", "text/plain") // 데이터 타입이 텍스!
    // Ctrl f5를 누르면 변하는 이유 : 이전 캐시를 쓰지 말아라
    // Ctrl f5를 눌러도 변하지 않는 이유 : 캐시를 해놨기 때문
    res.send("<h1>Hello</h1>")
})

app.get("/data", (req, res) => {
    // json : json형식의 데이터를 보내는 send
    res.json({name: "John", age: 20})
})

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})