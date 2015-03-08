'use strict';

var express = require('express');
var controller = require('./user.controller');
var config = require('../../config/config');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/me', auth.isAuthenticated(), controller.me);
//router.delete('/:id', auth.hasRole('admin'), controller.destroy);
//router.put('/:id/password', auth.isAuthenticated(), controller.changePassword);
//router.get('/:id', auth.isAuthenticated(), controller.show);
router.post('/', controller.create);
router.post('/me/plan-builder', auth.isAuthenticated(), controller.savePlan);
router.get('/me/plan-builder', auth.isAuthenticated(), controller.getPlan);

module.exports = router;
