import mongoose from "mongoose";

const productcSchema = new mongoose.Schema({
  name: { type: String, required: [true, "le name est obligatoir"] },
  fabricant: { type: String, required: [true, "le fabricant est obligatoir"] },
  stock: { type: Number, required: [true, "le stock est obligatoir"] },
  prix: { type: String , required: [true, "le prix est obligatoir"] },
  produitId:{type: String, required: [true]}
});
const Product = new mongoose.model("Product", productcSchema);

export default Product;
