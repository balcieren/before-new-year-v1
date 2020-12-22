import mongoose from "mongoose";
export default () => {
  return mongoose
    .connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: true,
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch(() => console.log("Not Connected to MongoDB"));
};
