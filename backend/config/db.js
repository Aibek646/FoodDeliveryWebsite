import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://sunemfamily:TL31D5RibctUi3mi@cluster0.ze90myh.mongodb.net/food-del"
    )
    .then(() => {
      console.log("DB Connected");
    });
};
// mongodb+srv://sunemfamily:TL31D5RibctUi3mi@cluster0.ze90myh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
