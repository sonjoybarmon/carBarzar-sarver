const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const uri =
  "mongodb+srv://sree:sree@cluster0.5trbi.mongodb.net/cinema-hall?retryWrites=true&w=majority";

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err) => {
  const cars = client.db("car-bazar").collection("cars");
  const drivers = client.db("car-bazar").collection("driver");
  const carSlide = client.db("car-bazar").collection("carImage");
  const hotCars = client.db("car-bazar").collection("hotCars");
  const comingCar = client.db("car-bazar").collection("comingCar");

  //car collection
  app.get("/car", (req, res) => {
    cars.find({}).toArray((err, document) => {
      res.send(document);
      // console.log(document);
    });
  });
  app.post("/car", (req, res) => {
    const car = req.body;
    cars.insertOne(car).then((result) => {
      res.send(insertedCount);
    });
  });

  app.get("/details/:_id", (req, res) => {
    cars.find({ _id: ObjectId(req.params._id) }).toArray((err, document) => {
      res.send(document[0]);
    });
  });

  app.delete("/car/delete/:id", (req, res) => {
    cars.deleteOne({ _id: ObjectId(req.params.id) }).then((result) => {
      res.send(result.insertedCount > 0);
    });
  });

  //   driver collection

  app.get("/driver", (req, res) => {
    drivers.find({}).toArray((err, document) => {
      res.send(document);
      // console.log(document);
    });
  });
  app.post("/driver", (req, res) => {
    const driver = req.body;
    drivers.insertOne(driver).then((result) => {
      res.send(insertedCount);
    });
  });

  app.get("/driver/:_id", (req, res) => {
    drivers.find({ _id: ObjectId(req.params._id) }).toArray((err, document) => {
      res.send(document[0]);
    });
  });

  //   Car Image collection

  app.get("/slide", (req, res) => {
    carSlide.find({}).toArray((err, document) => {
      res.send(document);
    });
  });

  //hotCars collection
  app.get("/hotCars", (req, res) => {
    hotCars.find({}).toArray((err, document) => {
      res.send(document);
      // console.log(document);
    });
  });
  app.post("/hotCars", (req, res) => {
    const hotCar = req.body;
    hotCars.insertOne(hotCar).then((result) => {
      res.send(insertedCount);
    });
  });

  //hotCars collection
  app.get("/coming", (req, res) => {
    comingCar.find({}).toArray((err, document) => {
      res.send(document);
    });
  });
  app.post("/coming", (req, res) => {
    const comingCars = req.body;
    comingCar.insertOne(comingCars).then((result) => {
      res.send(insertedCount);
    });
  });
});

app.listen(process.env.PORT || 4000, () =>
  console.log("server side is running port 4000")
);
// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bodyParser = require("body-parser");

// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }));
// // app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // app.use("/api/car", require("./routers/carRoutes"));

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => {
//   console.log(`SERVER is RUNNING ON PORT ${PORT}`);
//   mongoose.connect(
//     `mongodb+srv://sree:sree@cluster0.5trbi.mongodb.net/car-bazar?retryWrites=true&w=majority`,
//     {
//       useNewUrlParser: true,
//       useFindAndModify: true,
//       useCreateIndex: true,
//       useUnifiedTopology: true,
//     },
//     () => {
//       console.log("Database Connected...");
//     }
//   );
// });
