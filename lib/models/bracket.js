'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Bracket Schema
 */
var BracketSchema = new Schema({
    name: String,
    bracket: Object
});

/**
 * Validations
 */


mongoose.model('Bracket', BracketSchema);
