import express from "express"
import Attraction from "../models/attraction.js"
const router = express.Router();

router.post("/", async (req, res) => {
    const newAttraction = new Attraction(req.body)

    try{
        const savedAttraction = await newAttraction.save();
        res.status(200).json(savedAttraction)
    }catch(err){
        res.status(500).json(err)
    }
})

router.put("/:name/:city/:country", async (req, res) => {

    try{
        const updatedAttraction = await Attraction.findOneAndUpdate({"name":req.params.name, "city":req.params.city, "country":req.params.country}, { $set: req.body }, { new: true })
        res.status(200).json(updatedAttraction)
    }catch(err){
        res.status(500).json(err)
    }
})

router.get("/:city/:country", async (req, res) => {

    try{
        const getAttraction = await Attraction.find({"city":req.params.city, "country":req.params.country})
        res.status(200).json(getAttraction)
    }catch(err){
        res.status(500).json(err)
    }
})

router.delete("/:id", async (req, res) => {

    try{
        await Attraction.findByIdAndDelete(req.params.id)
        res.status(200).json("Attraction Deleted")
    }catch(err){
        res.status(500).json(err)
    }
})

export default router