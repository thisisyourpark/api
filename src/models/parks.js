const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema
const ParkSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  cityNearest: {
    type: String,
    required: false
  },
  lat: {
    type: Number,
    required: true
  },
  lng: {
    type: Number,
    required: true
  },
  siteGovUrl: {
    type: String,
    required: false
  },
  foursquareUrl: {
    type: String,
    required: false
  },
  yelpUrl: {
    type: String,
    required: false
  },
  siteInstagramLocationNumber: {
    type: Number,
    required: false
  },
  medias: {
    type: Array
  }
});

module.exports = mongoose.model('Park', ParkSchema);
