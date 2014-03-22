'use strict';

var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing'),
    Bracket = mongoose.model('Bracket'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

/**
 * Get awesome things
 */
exports.awesomeThings = function(req, res) {
  return Thing.find(function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
};

exports.getAllBrackets = function(req, res){
    return Bracket.find(function (err, brackets) {
        if (!err) {
            return res.json(brackets);
        } else {
            return res.send(err);
        }
    });
};

exports.getBracketById = function(req, res){
    console.log(req.params.id);
    return Bracket.findById(req.params.id, function (err, bracket) {
        if (!err) {
            return res.json(bracket);
        } else {
            return res.send(err);
        }
    });
};

exports.addBracket = function(req, res){
    Bracket.create({
        name : req.body.name,
        createdBy: req.body.user.email,
        bracket: JSON.stringify({
            teams : [
                ["Team 1", "Team 2"], /* first matchup */
                ["Team 3", "Team 4"]  /* second matchup */
            ],
            results : [
            ]
        })
    }, function(err, bracket){
        return res.json(bracket);
    });
};

exports.updateBracket = function(req, res){
    console.log(req.body);
    return Bracket.findById(req.body._id, function (err, bracket) {
        if (!err) {
            bracket.bracket = req.body.bracket;
            bracket.save();
            return res.json(bracket);
        } else {
            return res.send(err);
        }
    });
};

exports.deleteBracket = function(req, res){
//    return Bracket.findById(req.params.id, function (err, bracket) {
//        if (!err) {
//            return res.json(bracket);
//        } else {
//            return res.send(err);
//        }
//    });
};