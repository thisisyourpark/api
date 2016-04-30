/*
 * Settings Manager
 *
 * Initializes nconf and configures priority for project configuration settings
 *
 */
const path = require('path');
const nconf = require('nconf');

// Highest priority command line arguments and ENV variables
nconf
  // Highest Priority command line arguments
  .argv()
  // ENV Variables
  .env('_')
  // ENV specific settings
  .file('global', {file: path.join(__dirname, `${process.env.NODE_ENV}.json`)})
  // User settings
  .file('user', {file: path.join(__dirname, 'user.json')})
  // Defaults
  .file({file: path.join(__dirname, 'defaults.json')});

module.exports = nconf;
