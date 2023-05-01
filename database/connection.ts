import mongoose from "mongoose";

async function connectDB() {
  mongoose
    .connect(
      `mongodb+srv://marlonsavian:${process.env.DBPASSWORD}@cluster0.7alekql.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => {
      console.log("db connected");
    })
    .catch((error) => {
      console.error(`error connecting to db ${error}`);
    });
}

export default connectDB;
