import express from "express";
import {
  addProd,
  fetchProdtucts,
  getOneroduct,
  updateProduct,
  deleteProd
} from "../contollers/product.js";
const router = express.Router();

router.post("/addprod/:idfabric", addProd);
router.get("/", fetchProdtucts);
router.get("/fabric/:productId", getOneroduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProd);

export default router;
