import express from "express";
import vehicleRoute from "./routes/vehicle.routes";
import userRoute from "./routes/user.routes";
import "./databases/mongodb";
import cors from "cors";

const app = express();


app.use(cors());
app.use(express.json());



app.use('/vehicle', vehicleRoute);
app.use('/user', userRoute);



app.listen(3333, () => console.log("Server is running ✅"));