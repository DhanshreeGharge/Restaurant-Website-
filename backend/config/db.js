import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://greatstack:bvcoew@cluster0.addtx.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}