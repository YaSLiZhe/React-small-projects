import express from "express";
import fs from "fs";
import cors from "cors";

const port = 3000;

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(express.static("data"));
app.use(cors());

app.get("/api/cityList", (req, res) => {
  fs.readFile("./data/cities.json", "utf8", (error, data) => {
    if (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to retrieve cities" });
      return;
    }
    const cities = JSON.parse(data);
    res.json(cities.cities);
  });
});

app.listen(port, () => {
  console.log("Server listening on port", port);
});
