const mongoose = require("mongoose");
const Dojo = mongoose.model("Dojo");
const Rating = mongoose.model("Rating");

module.exports = {
    index: (req, res)=>{
        Dojo.find({})
        .then(Dojo => res.json(Dojo))
        .catch(err => res.send(err))
    },
    create: (req, res)=>{
        console.log("Made it to controller");       
        Dojo.create(req.body)
        .then(Dojo => res.json(Dojo))
        .catch(err => res.send(err))
    },
    show: (req, res)=>{
        Dojo.findById(req.params.id)
        .then(Dojo => res.json(Dojo))
        .catch(err => res.send(err))
    },
    update: (req, res)=>{
        console.log("Made it to here")
        Dojo.update({_id:req.params.id},{$push:{stars:req.body.stars,comment:req.body.comment}})
        .then(user => res.json(Dojo))
        .catch(err => res.send(err))
    },
    create_rating: (req, res)=>{
        console.log("Made it to here")
        Rating.update({_id:req.params.id},{$push:{stars:req.body.stars,comment:req.body.comment}})
        .then(user => res.json(Dojo))
        .catch(err => res.send(err))
    }
}