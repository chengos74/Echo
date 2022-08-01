var express = require('express');
var router = express.Router();
var uniqid = require('uniqid');
var fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// LOG-IN 
router.post('/login', (req, res, next) => {
  // comparer le user à la bdd
  // créer une session
  // res.json(userId) redirection vers homepage
});

//SIGN-UP
router.post('/signup', (req, res, next) => {
  // créer un nouveau user
  // enregistrer en base de données
  // res.json(uderId) redirection vers homepage
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
  let imagePath = './tmp/' + uniqid() + '.jpg';
  let resultCopy = await req.files.photo.mv(imagePath); // chaque photo est enregistrée dans le repertoire temporaire

  console.log(resultCopy); // si undefined = tout est ok !

  if (!resultCopy) {
    // stocker l'image sur un server et dans la bonne collection
    // renvoyer l'image au front
    res.json(resultCopy);
  }
  //fs.unlinkSync(imagePath); // supprimer l'image du dossier tmp
});

//ADD CONTENT
router.post('/add-content', (req, res, next) => {
  // afficher la page des paramètres de la publication 
});

//POST
router.post('/post-content', (req, res, next) => {
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
