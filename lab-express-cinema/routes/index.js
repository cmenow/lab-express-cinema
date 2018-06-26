const express = require('express');
const router = express.Router();

const theMovies = require("../models/movies-model.js");


/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index');
});



router.get("/movies", (req, res, next) => {

    theMovies.find()

    .then((moviesResults) => {


        console.log("GTQ ", moviesResults);

        // send the database results to the view as "bookArray"

        res.locals.moviesArray = moviesResults;
        res.render("movies-page.hbs", moviesResults);
        // res.send(moviesResults);

    })

    .catch((err) => {

        //show error page
        next(err);
    });


});


router.get("/movies/:id", (req, res, next) => {

    let movieID = req.params.id;
    theMovies.findOne({ "_id": movieID })
        .then((movie) => {
            res.render("movie-detail.hbs", { movie })
        })
        .catch((err) => {
            console.log(err);
        })
})




module.exports = router;