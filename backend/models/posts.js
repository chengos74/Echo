var mongoose = require("mongoose");

//schéma
var postsSchema = mongoose.Schema({
    pseudo: String,
    avatar: String,
    latitude: Number,
    longitude: Number,
    adress: String,
    comments: String,
    likes: Number,
    wishlist: String,
    date : Number,
    isStory : Boolean,
    URI : String,
    isLiked: Boolean,
    isComment: Boolean,
    id : Number,
    range: Number,
    desc: String,
    city: String,
});

var postsModel = mongoose.model("posts", postsSchema);

module.exports = postsModel;

