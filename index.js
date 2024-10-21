const express = require('express');
const connectDb = require("./config/db.js")
const Task = require('./models/task');
const taskRoutes = require("./routes/taskRoute.js")


connectDb()
const app = express();


app.use(express.json());
app.use("/tasks", taskRoutes);

app.get("/", (req, res) => {
    return res
      .status(200)
      .send({
        success: true,
        message: "hello from faiz"
      });
  });


const PORT =  3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
