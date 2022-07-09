import mongoose from "mongoose";
import "dotenv/config";

mongoose.Promise = global.Promise;

// process.env.MONGO_URL
const MONGO_URL = 'mongodb://localhost:27017/corelab';


mongoose.connect(MONGO_URL)
.then(() => console.log('MongoDB is running ✅'))
.catch(() => console.log('MongoDB is not runnning ❌'));