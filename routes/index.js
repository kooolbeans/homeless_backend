const express = require('express');
const {MainController} = require('../controllers/index');
// eslint-disable-next-line new-cap
const router = express.Router();

// test ROUTE
router.get('/test', async (req, res)=>{
  res.status(200).json({
    message: ' Working...',
  });
});

// eslint-disable-next-line max-len
router.get('/homie/:id', async (req, res)=> MainController.getAction(req, res) );
// eslint-disable-next-line max-len
router.post('/payment/:id', async (req, res)=> PaymentController.payAction(req, res) );

module.exports = router;
