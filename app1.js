const express = require('express')
const app = express()
const port = 2000

// GET, POST, PUT, PATCH, DELETE
let array = []
// 조회
app.get("/array", (req, res) => {
    res.json(array)
    // 꼭 json을 넣지 않아도 된다. send를 넣어도 된다.
    res.json(1)
    res.json("Hello")
})

// 주소가 같더라도 메소드가 다르므로 괜찮다
app.post("/array", (req, res) => {
    array.push({content: array.length+1})
    // post요청을 할 때마다 json 데이터가 들어간다. 
    res.json({result: "ok"}) 
})

app.delete("/array", (req, res) => {
    array = []
    res.json({result: "delete ok"}) 
})

// listen : port번호에 대해 listen하고 있는 것
app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})