const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    //mongoDb connection String
    const con = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB Connected: ${con.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
