const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect("AC-SZB6YUE-SHARD-00-02.4TSS1SN.MONGODB.NET:27017/mern-todo", {
    useUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => console.log("connected to DB"))
  .catch(console.error);

const Todo = require("./models/Todo");

app.get("/todos", async (req, res) => {
  const todos = await Todo.find();

  res.json(todos);
});

app.listen(3001, () => console.log("server started on port 3001"));
