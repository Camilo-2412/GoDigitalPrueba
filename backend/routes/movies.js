const express = require("express");
const router = express.Router();
const MoviesController = require("../controllers/movies");

router.get("/getMovie/:type&:pag" , MoviesController.getMovies);
router.get("/getDetails/:id", MoviesController.getDetails);
router.get("/getByName/:name&:pag" , MoviesController.getByName);


module.exports = router;