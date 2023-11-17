import mongoose from "mongoose";

const fabricSchema = new mongoose.Schema({
  name: { type: String, required: [true, "le name est obligatoir"] },
  adress: { type: String, required: [true, "l'adresse est obligatoir"] },
  dateDeFabrication: { type: Date, required: [true, "le date de fabrication est obligatoir"] },
});
const Fabric = new mongoose.model("fabric", fabricSchema);
export default Fabric; 