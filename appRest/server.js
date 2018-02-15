var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.listen(18000, function () {
    console.log('Example app listening on port 18000!')
})