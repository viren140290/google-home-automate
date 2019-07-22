// require('dotenv').config()

var express = require('express')
// var bodyParser = require('body-parser')
// const basicAuth = require('express-basic-auth')
// const GoogleHome = require('node-googlehome')

var app = express() // the main app


// app.use(basicAuth({
//     users: { process.env.username : 'supersecret' }
// }))

// function getUers

// var jsonParser = bodyParser.json()

app.get('/test', function (req, res) {
  console.log(app.mountpath) // /admin
  res.send({test: 'text'})
})

app.get('/', function (req, res) {
  console.log(app.mountpath) // /admin
  res.send({test: 'text'})
})

// app.post('/home', jsonParser, function (req, res) {
//   // if(req.get('')) {}
//   if(req.body['message']) {
//    var message = req.body['message']
//    let device = new GoogleHome.Connecter('192.168.86.24')
//    device.config({lang: 'hi'})
//    device.speak(message)
//    res.send({test: 'text'})
//  }
//  else {
//   res.status(400).send({errro: 'Incorrect body'})
//   }
// })

app.listen(process.env.PORT || 5000, function () {
  console.log('Ready')
})
