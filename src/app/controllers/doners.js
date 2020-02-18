const Doners = require('../models/doners')

module.exports = {
    index(req, res){
        
        Doners.all((doners)=>{
            return res.render('donation/index' , { doners })
        })
    },
    post(req, res){
        Doners.create(req.body , ()=>{
            return res.redirect('/home')
        })
    }
}