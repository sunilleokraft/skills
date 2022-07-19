const express = require('express')
const router = express.Router()
const randomFunction = require("../Controllers/skillController")
router.get('/skills',randomFunction )
module.exports = router
