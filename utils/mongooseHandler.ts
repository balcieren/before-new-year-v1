import mongoose from "mongoose";
export default async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: true,
    });
    return console.log("Connected to MongoDB");
  } catch (e) {
    return console.log("Not Connected to MongoDB");
  }
};
