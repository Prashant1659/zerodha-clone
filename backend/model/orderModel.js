import {model} from 'mongoose';
import orderSchema from '../schemas/orderSchema.js';

const orderModel = new model('order',orderSchema);

export default orderModel;