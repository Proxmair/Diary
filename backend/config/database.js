import mongoose from "mongoose";

export const connectDatabase = () => {
  mongoose
    .connect("mongodb+srv://Proxmair:Proxmair123@cluster0.s9tk6.mongodb.net/test")
    .then((c) => {
      console.log(`Mongodb connect to: ${c.connection.host}`);
    })
    .catch((e) => {
      console.log(e);
    });
};
