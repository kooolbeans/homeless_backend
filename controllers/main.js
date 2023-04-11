const {Homie} = require('../models/index');

const getAction = async (req, res) => {
  try {
    const data = await Homie.find({id: req.params.id});
    res.json(data);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

exports.MainController = {
  getAction,
};
