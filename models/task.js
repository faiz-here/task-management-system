const mongoose = require('mongoose');

// Define Task schema
const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  priority: {
    type: Number,  // 1 - Highest priority, larger numbers are lower priority
    default: 5
  },
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'completed'],
    default: 'pending'
  },
  executionTime: {
    type: Date,
    default: Date.now
  }
});

// Create Task model
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
