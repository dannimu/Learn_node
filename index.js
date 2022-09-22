const express = require('express')
//处理跨域问题
const cors = require('cors')
const app = express()
const port = 3000

//处理跨域问题
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/yinan', (req, res) => {
    res.send(
        {asdf:123}
    )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
