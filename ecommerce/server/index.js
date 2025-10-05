import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./utils/db.js"

dotenv.config()

const app = express()
const PORT=process.env.PORT || 5000

app.listen(PORT,() => {
  console.log(`server running on ${PORT}`)
})

connectDB()