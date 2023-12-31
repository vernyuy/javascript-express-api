import { http, storage } from "@ampt/sdk";
import express, { Router } from "express";
const app = express();

const api = Router();

api.get("/greet/:name", (req, res) => {
  const { name } = req.params;
  const test = storage();

  test.write("./image.png", image);

  if (!name) {
    return res.status(400).send({ message: "Missing route param for `name`!" });
  }

  return res.status(200).send({ message: `Hello ${name}!` });
});

app.use("/users", require("./routes/user"));

api.post("/submit", async (req, res) => {
  return res.status(200).send({
    body: req.body,
    message: "You just posted data",
  });
});

app.use("/api", api);

http.node.use(app);
