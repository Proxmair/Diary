import mongoose from "mongoose";

export const connectDatabase = () => {
  mongoose
    .connect("mongodb+srv://Umair:Umair123@cluster0.wmcfxow.mongodb.net/?retryWrites=true&w=majority")
    .then((c) => {
      console.log(`Mongodb connect to: ${c.connection.host}`);
    })
    .catch((e) => {
      console.log(e);
    });
};
