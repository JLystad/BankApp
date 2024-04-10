import mongoose from "mongoose";

const DBconfig=async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017')
        console.log("DB connected");
    } catch (error) {
        console.log("couldn't connect DB",error);
    }
}

export default DBconfig;