var express = require('express');
var router = express.Router();
var uniqid = require('uniqid');
var fs = require('fs');

//encryption
var bcrypt = require('bcrypt');
var uid2 = require('uid2');
const cost = 10;

//importation models
var postsModel = require("../models/posts");
var usersModel = require("../models/users");


// LOG-IN 
router.post('/login', async (req, res, next) => {

  // comparer le user à la bdd
    var user = await usersModel.findOne({ 
      username : req.body.username, 
    })

	var password = req.body.password
  console.log(req.body.password);
  console.log("usertoken = " + user);
  
  if (bcrypt.compareSync(password, user.password)) {
   res.json({ login: true, token: user.token  });
  } else {
   res.json({ login: false });
  }
  // res.json(userId) redirection vers homepage
});

//SIGN-UP
router.post('/signup', async (req, res, next) => {

  //comparer si l'email existe déjà
  var userTaken = await usersModel.findOne({ email : req.body.email })
  var error = []

  if (req.body.username == ''
      || req.body.email == ''
      || req.body.username == ''    
      || req.body.password == ''
      || req.body.prenom == ''
      || req.body.nom == '') {
    error.push("Fields empty ...")
  
  } else if (userTaken) {
    error.push("Email already taken")
  
  } else {
    const hash = bcrypt.hashSync(req.body.password, cost)
  
    var newUser = new usersModel({
      lastName: req.body.nom,
      firstName: req.body.prenom,
      username: req.body.username,
      email: req.body.email,
      password: hash,
      token: uid2(32),
      avatar: null,
      dateInscription : null,
      birthday: null, 
      userGallery: null,
      followers: null,
      following: null,
      likes: null,
      messagerie: [
        {
          message: null,
          pseudo: null,
          date: null,
          isRead: null,
          isSend: null
      }
      ],
      latitude: null,
      longitude: null,
      id: null,
      desccription: null,
      isPublic: null,
    })
    console.log("body" + req.body.nom);
  
    console.log("new utilisateur est " + newUser);
    var userSave = await newUser.save();
  
    var result = false
      var token;
      if(userSave){
        result = true
        token = userSave.token
        res.json(userSave, token, error, result)
      }
  }

  // res.json(uderId) redirection vers homepage
});


//CONVERSATION
router.get('/conversation', (req, res, next) => {
	// récupérer les messages de la conversation
	// SI appuie bouton envoyer (mettre à jour la conversation)
	// afficher une conversation
});

//CREATE
router.post('/create', async (req, res, next) => {
  console.log(req.body)
  var newPost = new postsModel({
    pseudo: req.body.postPseudo,
    avatar: req.body.postProfilePicture,
    URI: req.body.postImage,
    range: req.body.range,
    desc: req.body.desc,
    likes: req.body.likes,
    comments: req.body.comments,
    city: req.body.city,
    date: req.body.time,
    isLiked: req.body.isLiked,
    isComment: req.body.isComment,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    wishlist: null,
    isStory: false,
  })

  // enregistrement du post en BDD
  var postSave = await newPost.save();

  if(postSave != null){
    res.json(postSave)
  }
});

//CAMERA
router.post('/camera', async (req, res, next) => {

  let imageUri =  uniqid() + '.jpg';
  let imagePath = './tmp/' + imageUri ;
  let resultCopy = await req.files.photo.mv(imagePath); // chaque photo est enregistrée dans le repertoire temporaire
  console.log("backend" + JSON.stringify(req.files.photo)); // si undefined = tout est ok !

  if (!resultCopy) {
    // stocker l'image sur un server et dans la bonne collection
    // renvoyer l'image au front
    res.json({photo : resultCopy});
  }
  // fs.unlinkSync(imagePath); // supprimer l'image du dossier tmp
});


//POST
router.get('/post-content', async (req, res, next) => {

	var contentBDD = await postsModel.find();

	console.log(contentBDD);
	res.json({ result: contentBDD })
	// afficher la homepage avec la nouvelle publication 
});


//SEARCH
router.post('/search', (req, res, next) => {
	// récupérer la valeur du champ de saisie
	// redirect en fonction du nom du compte
	// redirect en fonction du # (afficher toutes les publications avec le # en question)
});


//MAP 
router.post('/map', (req, res, next) => {

});


module.exports = router;
