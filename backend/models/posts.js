var mongoose = require("mongoose");

//schéma
var postsSchema = mongoose.Schema({
    pseudo: String,
    avatar: String,
    localisation: String,
    comments: String,
    likes: Number,
    wishlist: String,
    date : Date,
    isStory : Boolean,
    URI : String,
    isLiked: Boolean,
    isComment: Boolean,
    id : Number,
    range: Number,
});

var postsModel = mongoose.model("posts", postsSchema);

module.exports = postsModel;

