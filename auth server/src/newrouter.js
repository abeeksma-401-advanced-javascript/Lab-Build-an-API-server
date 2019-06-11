'use strict';

const auth = require('../../api server/src/auth/middleware');
const User = require('../../api server/src/auth/users-model');

const express = require('express');

const router = module.exports = new express.Router();

router.get('/public-stuff', (req, res) => {
  res.send('Hey! this is for everyone CommuSite');
}); //visible by anyone

router.get('/hidden-stuff', auth(), (req, res) => {
  res.send('you have reached the hidden stuff only available to those who have logged in');
}); //valid login

router.get('/something-to-read', auth(), (req, res) => {
  res.send('you can read the something to-read route');
}); //read

router.post('/create-a-thing', auth('create'), (req, res) => {
  res.send('This user is able to POST')
}); //create

router.put('/update', auth('update'), (req, res) => {
  res.send('This user is able to PUT')
}); //update

router.patch('/jp', auth('update'), (req, res) => {
  res.send('This user is able to PUT(patch)')
}); //update

router.delete('/bye-bye', auth('delete'), (req, res) => {
  res.send('This user is able to DELETE')
}); //delete

router.get('/everything', auth(''), (req, res) => {
  res.send('This user is able to do GET, POST, PUT, and DELETE')
}); //superuser