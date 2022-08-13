import mongoose from "mongoose";
const { Schema } = mongoose;

const restaurantSchema = new Schema({
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

export default mongoose.model("Restaurant", restaurantSchema)