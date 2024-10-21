const Task = require('../models/task');

const createTask = async (req, res) => {
    try {
      const { name, priority } = req.body;
      const task = new Task({ name, priority });
      await task.save();
      res.status(201).send(task);
    } catch (error) {
      res.status(500).send({ error: 'Error creating task' });
    }
  }

  const getAllPendingTask = async (req, res) => {
    try {
      const tasks = await Task.find({ status: 'pending' }).sort({ priority: 1 });
      if(!tasks || tasks.length ==0){
        return res.status(404).send({
          success: false,
          message: "no such task is available",
        })
      }
      res.send(tasks);
    } catch (error) {
      res.status(500).send({ error: 'Error fetching tasks' });
    }
  }

  const reprioritizeTask = async (req, res) => {
    try {
      const { priority } = req.body;
      const task = await Task.findByIdAndUpdate(
        req.params.id,
        { priority },
        { new: true }
      );
      if (!task) {
        return res.status(404).send({ error: 'Task not found' });
      }
      res.send(task);
    } catch (error) {
      res.status(500).send({ error: 'Error reprioritizing task' });
    }
  }

  const completeTask = async (req, res) => {
    try {
      // const { status } = req.body;
      const task = await Task.findByIdAndUpdate(
        req.params.id,
        { status: 'completed' },
        { new: true }
      );
      if (!task) {
        return res.status(404).send({ error: 'Task not found' });
      }

      res.send(task);
      await Task.findByIdAndDelete(req.params.id)
    } catch (error) {
      res.status(500).send({ error: 'Error completing task' });
    }
  }

  const deleteTask = async(req,res)=>{
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        return res.status(200).send({
          succes: true,
          message: "task has been deleted",
          task
        })
    } catch (error) {
      res.status(500).send({ error: 'Error completing task' });
    }
  }

  module.exports = {
    deleteTask, completeTask, getAllPendingTask, createTask,reprioritizeTask
  }