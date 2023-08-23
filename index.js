var http = require('http')
var _ = require('lodash')

http.createServer((req, res) => {
  res.write(`<html>
    <body>
      Hello, this http-server demo !
      <br>
      ${_.join(['a', 'b', 'c'], '- ')}
    </body>
  </html>`)
  res.end()
}).listen(3000, () => {
  console.log(`server is listening on http://localhost:3000`)
})