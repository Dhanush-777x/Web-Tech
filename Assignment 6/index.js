import express from "express";
import cors from "cors";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const sample = [
  "Chest Press Machine",
  "Seated Dip Machine",
  "Chest Fly Machine",
  "Bench Press",
  "Incline Bench Press",
  "Decline Bench Press",
  "Adjustable Bench",
  "Olympic Weight Bench",
];

app.get("/", (req, res) => {
    res.status(201).json(sample);
})

app.get("/equips", (req, res) => {
  res.send({data:"Hello user!"});
})

app.listen(port, ()=> {
    console.log("Successfully connected to port ", + port)
})
