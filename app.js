const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Next build Example app to test Marcos platform for Express listening on port ${port}`)
})


//main-bvxea6i-5fsm3ue7lcyps.uk-1.platformsh.site