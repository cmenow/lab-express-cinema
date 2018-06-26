const mongoose = require("mongoose");

const Schema = mongoose.Schema;


//new Schema = {}

const movieSchema = new Schema({

    // document structure @ rules definition here
    title: { type: String, required: true },
    director: { type: String },
    stars: { type: [] },
    image: { type: String },
    description: { type: String, required: true },
    showtimes: { type: [] }


}, {

    // additional setting for the schema here
    timestamps: true,

});

const Movies = mongoose.model("MovieDBDocument", movieSchema);


module.exports = Movies;