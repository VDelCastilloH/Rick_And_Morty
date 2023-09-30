const Router = require("express").Router();
//const Router = express.Router();
//Controllers
const getCharById = require ("../controllers/getCharById");
//const login = require ("../controllers/login.js");
//const {deleteFav,postFav} = require ("../controllers/handleFavorites");
const login = require('../controllers/login');
const postUser = require('../controllers/postUser');
const postFav = require('../controllers/postFav');
const deleteFav = require('../controllers/deleteFav');
 
Router.get('/character/:id',getCharById);
Router.get('/login',login);
Router.post('/login',postUser);
Router.post('/fav',postFav);
Router.delete('/fav/:id',deleteFav);

module.exports = Router;