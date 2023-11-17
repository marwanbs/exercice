import Fabric from "../models/fabric.js";

export const createFabric = async (req, res) => {
  const newFabric = new Fabric({
    name: req.body.name,
    adress: req.body.adress,
    dateDeFabrication: req.body.dateDeFabrication,
  });
  try {
    const fabri = await newFabric.save();
    res.status(201).send(fabri);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const fetchFabric = async (req, res) => {
  try {
    const getFabric = await Fabric.find();
    res.status(201).send(getFabric);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const getOneFabric = async (req, res) => {
  try {
    const getFabric = await Fabric.findById(req.params.id);
    res.status(201).send(getFabric);
  } catch (err) {
    res.status(500).send(err);
  }
};
export const updateFabric = async (req, res) => {
  const upFabId = req.params.id;
  try {
    const updFabric = await Fabric.findByIdAndUpdate(
      { _id: upFabId },
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(201).send(updFabric);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const deleteUser = async (req, res) => {
  const fabrId = req.params.id;
  try {
    const delFab = await Fabric.findByIdAndDelete({ _id: fabrId });
    res.status(201).send(delFab);
  } catch (err) {
    res.status(500).send(err);
  }
};
