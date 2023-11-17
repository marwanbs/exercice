import Product from "../models/product.js";


export const addProd = async (req, res) => {
  const newProduct = new Product({
    name: req.body.name,
    fabricant: req.body.fabricant,
    stock: req.body.stock,
    prix: req.body.prix  + " dt",
    produitId: req.params.idfabric,
  });
  try {
    const adProduit = await newProduct.save();
    res.status(200).send(adProduit);
  } catch (err) {
    res.status(500).send(err);
  }
}

export const fetchProdtucts = async (req, res) => {
  try {
    const getProdtucts = await Product.find();
    res.status(200).send(getProdtucts);
  } catch (err) {
    res.status(500).send(err);
  }
}

export const getOneroduct =  async (req, res) => {
  const productId = req.params.prodId;
  try {
    const getProdFabric = await Product.find({ fabricId: productId });
    res.status(200).send(getProdFabric);
  } catch (err) {
    res.status(500).send(err);
  }
}

export const updateProduct =async (req, res) => {
  try {
    const updatProd = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).send(updatProd);
  } catch (err) {
    res.status(500).send(err);
  }
}

export const deleteProd= async (req, res) => {
  const prodId = req.params.id;
  try {
    const delProd = await Product.findByIdAndDelete({ _id: prodId });
    res.status(200).send(delProd);
  } catch (err) {
    res.status(500).send(err);
  }
}




