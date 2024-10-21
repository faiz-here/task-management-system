const express = require("express")
const router = express.Router();
const {deleteTask, completeTask, getAllPendingTask, createTask,reprioritizeTask} = require("../controller/tatskController")


router.post('/', createTask);
  

router.get('/', getAllPendingTask);
  router.patch('/:id/reprioritize', reprioritizeTask);
  router.patch('/:id/completeTask', completeTask);
  router.delete("/:id/deleteTask", deleteTask)
    


  module.exports = router