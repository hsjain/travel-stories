import mongoose from "mongoose";
const { Schema } = mongoose;

const attractionSchema = new Schema({
    name:{
        type:String, 
        required:true
    },
    mentions:{
        type:Number, 
        required:true
    },
    city:{
        type:String, 
        required:true
    },
    country:{
        type:String, 
        required:true
    }
})

export default mongoose.model("Attraction", attractionSchema)