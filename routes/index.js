const express = require('express');
const {MainController} = require('../controllers/index');
const router = express.Router();

router.get('/homies', async (req, res)=> MainController.getAllAction(req, res) );
router.get('/homie/:id', async (req, res)=> MainController.getAction(req, res) );
router.post('/homie', async (req, res)=> MainController.createAction(req, res) );
router.put('/homie/:id', async (req, res)=> MainController.updateAction(req, res) );
router.delete('/homie/:id', async (req, res)=> MainController.deleteAction(req, res) );

router.post('/payment/:id', async (req, res)=> PaymentController.payAction(req, res) );

module.exports = router;
