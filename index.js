
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import routerProduct from "./Routes/product.js"
import routerFabric from "./Routes/fabric.js"
const app = express();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/prod",routerProduct );

app.use("/prod",routerProduct );

app.use("/prod",routerProduct );

app.use("/prod", routerProduct);

app.use("/prod",routerProduct);


app.use("/fab",routerFabric );

app.use("/fab", routerFabric);

app.use("/fab", routerFabric);

app.use("/fab", routerFabric);

app.use("/fab",routerFabric );

mongoose
  .connect("mongodb://127.0.0.1:27017/ProductDB")
  .then(() => {
    app.listen(4500, () => console.log("server up and running on port 4500"));
  })
  .catch((err) => res.status(500).send(err));
