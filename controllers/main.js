const {Homie} = require('../models/index');

const createAction = async (req, res) => {
  const homie = new Homie({
    name: req.body.name,
    description: req.body.description,
    image_url: req.body.image_url,
  });

  try {
    const result = await homie.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};
const updateAction = async (req, res) => {
  try {
    const record = await Homie.findOne({_id: req.params.id});
    if (!record) {
      res.status(404).json({message: `No record found`});
    };
    record.name = req.body.name;
    record.description = req.body.description;
    record.image_url = req.body.image_url;
    const result = await record.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};
const deleteAction = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Homie.findByIdAndDelete(id);
    if (!data) {
      res.status(404).json({message: `No record found`});
    };
    res.status(200).json({message: `Document with name: "${data.name}" has been deleted`});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};
const getAllAction = async (req, res) => {
  try {
    const data = await Homie.find();
    console.log(data);
    res.json(data);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};
const getAction = async (req, res) => {
  try {
    const data = await Homie.findOne({_id: req.params.id});
    res.json(data);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

exports.MainController = {
  createAction,
  updateAction,
  deleteAction,
  getAllAction,
  getAction,
};
