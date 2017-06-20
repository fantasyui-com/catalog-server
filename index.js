var express    = require('express')
var serveIndex = require('serve-index')

var app = express()

// Serve URLs like /ftp/thing as public/ftp/thing
app.use('/', serveIndex('products/product', {'icons': true}))
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
