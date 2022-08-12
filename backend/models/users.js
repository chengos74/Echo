var mongoose = require("mongoose");

//schéma user
var usersSchema = mongoose.Schema({
    lastName: String,
    firstName: String,
    username: String,
    email: String,
    avatar: String,
    password: String,
    dateInscription : Date,
    birthday: Date, 
    userGallery: { type: mongoose.Schema.Types.ObjectId, ref: 'posts' },
    followers: Number,
    following: Number,
    likes: Number,
    messagerie: [
        {
        message: String,
        pseudo: String,
        date: Date,
        isRead: Boolean,
        isSend: Boolean
        }
    ],
    latitude: Number,
    longitude: Number,
    id: Number,
    desccription: String,
    isPublic: Boolean,
    token: String,
});

var usersModel = mongoose.model("users", usersSchema);

module.exports = usersModel;

