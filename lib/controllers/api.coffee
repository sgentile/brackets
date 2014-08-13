'use strict'

mongoose = require('mongoose')
Bracket = mongoose.model('Bracket')
Schema = mongoose.Schema
ObjectId = Schema.ObjectId

exports.getAllBrackets = (req, res) ->
  Bracket.find (err, brackets) ->
    unless err
      res.json brackets
    else
      res.send err

exports.getBracketById = (req, res) ->
  Bracket.findById req.params.id, (err, bracket) ->
    unless err
      res.json bracket
    else
      res.send err

exports.addBracket = (req, res) ->
  Bracket.create
    name: req.body.name
    createdBy: req.body.user.email
    bracket: JSON.stringify(
      teams: [
        ["Team 1", "Team 2"]
        ["Team 3", "Team 4"]
      ]
      results:[]
    )
  , (err, bracket) ->
      res.json bracket

  return

exports.updateBracket = (req, res) ->
  Bracket.findById req.body.id, (err, bracket) ->
    unless err
      bracket.bracket = req.body.bracket
      bracket.save()
      res.json bracket
    else
      res.send err

  return

exports.deleteBracket = (req, res) ->
  Bracket.findByIdAndRemove req.body.id, (err) ->
    unless err
      res.json req.body.id
    else
      res.send err

  return

