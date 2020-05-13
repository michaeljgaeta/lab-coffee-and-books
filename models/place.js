const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
    name,
    location: {
      type: {
        type: String,
        default: "Point"
      },
      coordinates: [
        {
          type: Number,
          min: -180,
          max: 180
        }
      ]
    }
  });

//set index for later queries
placeSchema.index({ location: "2dsphere" });

const Place = mongoose.model("Place", placeSchema);

module.exports = Place;
