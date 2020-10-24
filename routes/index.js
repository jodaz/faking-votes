const express = require('express');
const loginRoutes = require('./api/login');
const votationCenterRoutes = require('./api/votation-centers');

module.exports = (app) => {
  app.use(express.json());
  app.use('/api', loginRoutes);
  app.use('/api/votation-centers', votationCenterRoutes);
};