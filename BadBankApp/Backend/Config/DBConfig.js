import mongoose from "mongoose";

const DBconfig=async()=>{
    try {
        const mongoURI = process.env.MONGODB_URI;
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("DB connected");
    } catch (error) {
        console.log("couldn't connect DB", error);
    }
}

export default DBconfig;