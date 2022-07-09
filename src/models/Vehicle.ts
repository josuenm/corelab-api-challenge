import mongoose from 'mongoose';


const vehicleSchema = new mongoose.Schema({
    name: String,
    description: String,
    plate: String,
    isFavorite: Boolean,
    year: Number,
    color: String,
    price: Number,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    createdAt: { type: Date, default: Date.now },
})


export default mongoose.model('Vehicle', vehicleSchema);
