const express = require('express')
const routes = express.Router()

const doners = require('./src/app/controllers/doners.js')

routes.get('/' , (req , res)=>{
    return res.redirect('/home')
})

routes.get('/home' , doners.index)
routes.post('/home' , doners.post)

module.exports = routes