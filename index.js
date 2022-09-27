const express = require('express')
const app = express()
const port = 3000

//处理跨域问题
const cors = require('cors')
app.use(cors())

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

var list = require('./data')
console.log('list:', list)

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// 获取数据
app.post('/list', (req, res) => {
    res.send(list)
})

// 新增数据
app.post('/add', (req, res) => {
    let data = req.body
    list.push(data)
    res.send(list)
})

// 修改数据
app.post('/update', (req, res) => {
    let data = req.body
    for(var row in list){
        if(list[row].id === data.id){
            list[row] = data
            break
        }
    }
    res.send(list)
})

// 删除数据
app.post('/delete', (req, res) => {
    let data = req.body
    for(var row in list){
        if(list[row].id === data.id){
            // splice
            list.splice(row,1)
            break
        }
    }
    res.send(list)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
