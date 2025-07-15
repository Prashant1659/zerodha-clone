import {Schema} from 'mongoose';

const orderSchema = new Schema(
    {
        name:{
            type:String
        },
        qty:{
            type:Number
        },
        price:{
            type:Number
        },
        mode:{
            type:String // buy or sell
        }
    },
    {
        timestamps:true
    }
);

export default orderSchema;