import {model} from 'mongoose';
import holdingSchema from '../schemas/HoldingsSchema.js';

const holdingModel = new model('holding',holdingSchema);

export default holdingModel;