const mongoose = require('mongoose');


const connectdb = async ()=>{
  try {
    mongoose.connect('mongodb://127.0.0.1:27017/task-manager')
    console.log("database connected");
  } catch (error) {
    console.log("DB Error", error);
  }
}
//  mongoose.connect('mongodb://127.0.0.1:27017/task-manager', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   }).then(() => {
//     console.log('✅ Connected to MongoDB');
//   }).catch((err) => {
//     console.error('❌ MongoDB connection error:', err);
//   });
module.exports = connectdb; 