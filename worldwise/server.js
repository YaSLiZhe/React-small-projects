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

app.get("/api/cityList/:id", (req, res) => {
  const cityId = parseInt(req.params.id);

  fs.readFile("./data/cities.json", "utf8", (error, data) => {
    if (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to retrieve cities" });
      return;
    }
    const cities = JSON.parse(data);
    const city = cities.cities.find((c) => c.id === cityId);

    if (!city) {
      res.status(404).json({ error: "City not found" });
    } else {
      res.json(city);
    }
  });
});
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

app.post("/api/cityList", (req, res) => {
  const newCity = req.body;
  fs.readFile("./data/cities.json", "utf8", (error, data) => {
    if (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to retrieve cities" });
      return;
    }
    try {
      const cities = JSON.parse(data);
      const nextCityId = getRandomInt(10000, 50000);
      const cityToAdd = { ...newCity, id: nextCityId };
      cities.cities.push(cityToAdd);
      fs.writeFile("./data/cities.json", JSON.stringify(cities), (writeError) => {
        if (writeError) {
          console.log(writeError);
          res.status(500).json({ error: "Failed to add the new city" });
          return;
        }
        // Return the added city as the response
        res.json(cityToAdd);
      });
    } catch (err) {
      console.log(error);
      res.status(500).json({ error: "Failed to add the new city" });
    }
  });
});

// Helper function to find the index of a city by its ID
function findCityIndexById(citiesArray, cityId) {
  return citiesArray.findIndex((city) => city.id === cityId);
}

app.delete("/api/cityList/:id", async (req, res) => {
  const cityId = parseInt(req.params.id);

  try {
    // Read the existing data from the JSON file
    const data = await fs.promises.readFile("./data/cities.json", "utf8");

    // Parse the JSON data
    const cities = JSON.parse(data);

    // Find the index of the city with the given ID
    const cityIndex = findCityIndexById(cities.cities, cityId);

    if (cityIndex === -1) {
      // City not found
      res.status(404).json({ error: "City not found" });
      return;
    }

    // Remove the city from the array
    cities.cities.splice(cityIndex, 1);

    // Write the updated data back to the JSON file
    await fs.promises.writeFile("./data/cities.json", JSON.stringify(cities));

    // Return success response
    res.json({ message: "City deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to delete the city" });
  }
});

app.listen(port, () => {
  console.log("Server listening on port", port);
});
