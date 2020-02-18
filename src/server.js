const express = require('express')
const nunjucks = require('nunjucks')
const methodOverride = require('method-override')

const server = express()
const router = require('../router')

server.set('view engine' , 'njk')

nunjucks.configure('src/app/view' , {
    express:server,
    autoescape: true,
    noCache:true
})

server.use(express.static('public'))
server.use(express.urlencoded({ extended:true }))
server.use(methodOverride('_method'))
server.use(router)

server.listen(1313 , ()=>{
    console.log('Server is Running')
})