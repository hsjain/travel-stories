import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors";
import attractRoute from "./routes/attractions.js"
import restRoute from "./routes/restaurants.js"

const app = express()

dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to Database")
    } catch (error) {
        throw error;
    }
}

app.use(cors());
app.use(express.json())
app.use("/api/attraction", attractRoute)
app.use("/api/restaurant", restRoute)

app.listen(8080, () => {
    connect()
    console.log("Backend connected");
});