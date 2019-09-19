var express = require('express')
var router = express.Router()
var burger = require('../models/burger.js')

router.get('/', function (req, res) {
    burger.all(function (burgerdata) {
        console.log(burgerdata)
        res.render("index")
    })

})

module.exports = router;