import express from "express"
import Restaurant from "../models/restaurant.js"
const router = express.Router();

router.post("/", async (req, res) => {
    const newRestaurant = new Restaurant(req.body)

    try{
        const savedRestaurant = await newRestaurant.save();
        res.status(200).json(savedRestaurant)
    }catch(err){
        res.status(500).json(err)
    }
})

router.put("/:name/:city/:country", async (req, res) => {

    try{
        const updatedRestaurant = await Restaurant.findOneAndUpdate({"name":req.params.name, "city":req.params.city, "country":req.params.country}, { $set: req.body }, { new: true })
        res.status(200).json(updatedRestaurant)
    }catch(err){
        res.status(500).json(err)
    }
})

router.get("/:city/:country", async (req, res) => {

    try{
        const getRestaurant = await Restaurant.find({"city":req.params.city, "country":req.params.country})
        res.status(200).json(getRestaurant)
    }catch(err){
        res.status(500).json(err)
    }
})

router.delete("/:id", async (req, res) => {

    try{
        await Restaurant.findByIdAndDelete(req.params.id)
        res.status(200).json("Restaurant Deleted")
    }catch(err){
        res.status(500).json(err)
    }
})

export default router