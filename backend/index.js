import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import holdingModel from './model/holdingModel.js';
import positionModel from './model/positionModel.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import orderModel from './model/orderModel.js';
dotenv.config();
const URI = process.env.MONGO_URL;
const PORT = process.env.PORT || 3002;


const app = express();

app.use(cors());
app.use(bodyParser.json());


app.get('/allHoldings',async(req,res) => {
    let allHolding = await holdingModel.find({});
    res.json(allHolding);
})

app.get('/allPositions',async(req,res) => {
    let allPosition = await positionModel.find({});
    res.json(allPosition);
})

app.post('/newOrder',async(req, res) =>{
    let newOrder = new orderModel({
        name:req.body.name,
        qty:req.body.qty,
        price:req.body.price,
        mode:req.body.mode
    })

    await newOrder.save();
})

app.listen(PORT,()=>{
    console.log("App Started!");
    try {
        mongoose.connect(URI);
        console.log("Db connected!");
    } catch (error) {
        console.log('error in db connection',error);
    }
})