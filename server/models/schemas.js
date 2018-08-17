const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DojoSchema = new mongoose.Schema({
    name: {type: String, minlength:2,required: [true, "Name field must be at least 3 characters"]},
    state: {type: String, minlength:2,required: [true, ""]}, 
    _ratings:[{type: Schema.Types.ObjectId, ref: 'Rating'}]
   }, {timestamps: true})
mongoose.model('Dojo', DojoSchema);

const RatingSchema = new mongoose.Schema({
    stars: {type: Number, minlength:1,required: [true, "Stars need at least 1 rating"]},
    comment: {type: String, minlength:4,required: [true, "Message field must be at least 8 characters"]},
   }, {timestamps: true})
mongoose.model('Rating', RatingSchema);