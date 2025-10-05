import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()


export const connectDB=async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI,{
        dbName:"e-commerce"
      }
    )
    console.log("MONGODB is running")
    } catch (error) {
        console.log(error)
    }
}




