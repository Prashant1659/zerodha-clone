import {model} from 'mongoose';
import positionSchema from '../schemas/positionSchema.js';

const positionModel = new model('position',positionSchema);

export default positionModel;