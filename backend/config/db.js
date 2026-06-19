import mongoose from "mongoose";

const connectDb = async (req, res) => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("DB connected");
  } catch (error) {
    console.log("No, DB not connnected");
  }
};

export default connectDb