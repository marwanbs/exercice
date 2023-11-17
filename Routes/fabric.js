import express from "express";
import {
  createFabric,
  fetchFabric,
  getOneFabric,
  updateFabric,
  deleteUser
} from "../contollers/fabric.js";
const router = express.Router();

router.post("/addFab",createFabric);
router.get("/",fetchFabric);
router.get("/:id",getOneFabric);
router.put("/:id",updateFabric);
router.delete("/:id",deleteUser);
export default router;
