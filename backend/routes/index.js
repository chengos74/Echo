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

/* GET home page. */
router.get('/', function (req, res, next) {
  
  res.render('index', { title: 'Express' });
});

// LOG-IN 
router.post('/login', async (req, res, next) => {
  // comparer le user à la bdd
    var user = await usersModel.findOne({ 
      username : req.body.username, 
    })

var password = req.body.password

  console.log("usertoken = " + user.token);
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
      messagerie: {
          message: null,
          pseudo: null,
          date: null,
          isRead: null,
          isSend: null
      },
      latitude: null,
      longitude: null,
      id: null,
      desccription: null,
      isPublic: null,
    })
  
    console.log("new utilisateur est " + newUser);
    var userSave = await newUser.save();
  
    var result = false
      var token;
      if(userSave){
        result = true
        token = userSave.token
      }
  }

  // res.json(uderId) redirection vers homepage
  res.json(userSave, token, error, result)
});

//PROFIL (NOTRE PAGE PERSONNELLE)
router.get('/profil', (req, res, next) => {
  // afficher la page du profile utilisateur 
});

//SETTINGS
router.get('/settings', (req, res, next) => {
  // afficher les settings 
});

//ACCUEIL MESSAGE
router.get('/home-message', (req, res, next) => {
  // afficher l'accueil des messages
});

//CONVERSATION
router.get('/conversation', (req, res, next) => {
  // récupérer les messages de la conversation
  // SI appuie bouton envoyer (mettre à jour la conversation)
  // afficher une conversation
});

//CREATE
router.get('/create', (req, res, next) => {
  // res.json(afficher la page de création, pellicule et photos)
});

//CAMERA
router.post('/camera', async (req, res, next) => {

  let imageUri =  uniqid() + '.jpg'
  let imagePath = './tmp/' + imageUri ;
  let resultCopy = await req.files.photo.mv(imagePath); // chaque photo est enregistrée dans le repertoire temporaire
  console.log(req.files.photo); // si undefined = tout est ok !

  if (!resultCopy) {
    // stocker l'image sur un server et dans la bonne collection
    // renvoyer l'image au front
    res.json({photo : imageUri});
  }
  // fs.unlinkSync(imagePath); // supprimer l'image du dossier tmp
});

//ADD CONTENT
router.post('/add-content', (req, res, next) => {
  // afficher la page des paramètres de la publication 
});

//POST
router.get('/post-content', async (req, res, next) => {

  var contentBDD = await postsModel.find();
  
  console.log(contentBDD);
  res.json({result : contentBDD})
  // afficher la homepage avec la nouvelle publication 
});

//BACK TO HOME
router.get('/back-to-home', (req, res, next) => {
  // redirect sur la homepage
});

//BACK-TO-PELLICULE-OR-CAMERA
router.get('/back', (req, res, next) => {
  // retour à la page précédente en fonction de la page d'arrivée
  // SI arrivé depuis pellicule (redirect to pellicule)
  // SI arrivé depuis camera (redirect to camera)
});

//SEARCH
router.post('/search', (req, res, next) => {
  // récupérer la valeur du champ de saisie
  // redirect en fonction du nom du compte
  // redirect en fonction du # (afficher toutes les publications avec le # en question)
});


//--------------COMPTE DES AUTRES UTILISATEURS--------------//
//ACCOUNT
router.post('/account', (req, res, next) => {
  // récupérer l'id du user sur lequel on a cliqué ou recherché
  // SI compte public
  // ALORS afficher les publications SINON afficher message compte privé
  // redirect sur account publication
});

//ACCOUNT-LIKED
router.post('/account-like', (req, res, next) => {
  // récupérer l'id du user sur lequel on a cliqué ou recherché
  // SI compte public
  // ALORS afficher les publications liké SINON afficher message compte privé
  // redirect sur account liked
});


//MAP 
router.post('/map', (req, res, next) => {
  // ouvrir la map et centrer la map sur la position de l'utilateur
});

module.exports = router;
