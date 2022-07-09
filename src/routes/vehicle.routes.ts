import { Router } from "express";
import { WithAuth } from "../middlewares/auth";
import Vehicle from "../models/Vehicle";

const router = Router();




const isOwner = (user, vehicle) => {
  if (JSON.stringify(user._id) === JSON.stringify(vehicle.author._id)) {
    return true;
  } else {
    return false;
  }
};


router.post('/create', WithAuth, async (req, res) => {

  try {
    const vehicle = new Vehicle({
      ...req.body,
      isFavorite: false,
      author: req.user._id
    });

    await vehicle.save();

    res.status(201).json(vehicle);
  } catch (error) {
    res.status(500).json({ error: 'Problem creating the vehicle, try again' });
  }
})


router.get('/findById/:id', WithAuth, async (req, res) => {
  const { id } = req.params;


  try {
    const vehicle = await Vehicle.findById(id);

    if (isOwner(req.user, vehicle)) {
      res.status(200).json(vehicle);
    } else {
      res.status(403).json({ error: 'Permission denied' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Problem requesting the vehicle, try again' });
  }
})


router.get('/findAll', WithAuth, async (req, res) => {
  try {
    const vehicles = await Vehicle.find({ author: req.user._id });
    res.status(200).json(vehicles);
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Problem requesting the vehicle list, try again' });
  }
})


router.delete('/deleteOne/:id', WithAuth, async (req, res) => {
  const { id } = req.params;

  try {
    const vehicle = await Vehicle.findById(id);

    if (isOwner(req.user, vehicle)) {
      await vehicle.delete();
      res.json({ message: 'Vehicle successfully deleted' }).status(204);
    } else {
      res.status(403).json({ error: 'Permission denied' });
    }
  } catch (error) {
    res.status(500).json({
      error:
        "Problem deleting the vehicle, maybe the note doesn't exist, try again",
    });
  }
})


router.patch('/updateOne/:id', WithAuth, async (req, res) => {
  const { name, description, plate, isFavorite, year, color, price } = req.body
  const { id } = req.params;

  try {
    const vehicle = await Vehicle.findById(id);

    if (isOwner(req.user, vehicle)) {
      const newVehicle = await Vehicle.findOneAndUpdate(
        { _id: id },
        {
          $set: {
            name: name,
            description: description,
            plate: plate,
            isFavorite: isFavorite,
            year: year,
            color: color,
            price: price
          }
        },
        { upsert: true, returnOriginal: false }
      );

      res.status(200).json(newVehicle);
    } else {
      res.status(403).json({ error: 'Permission denied' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Problem updating the vehicle, try again' });
  }
})


router.patch('/favorite/:id', WithAuth, async (req, res) => {
  const { isFavorite } = req.body
  const { id } = req.params;

  try {
    const vehicle = await Vehicle.findById(id);

    if (isOwner(req.user, vehicle)) {
      const newVehicle = await Vehicle.findOneAndUpdate(
        { _id: id },
        {
          $set: {
            isFavorite: isFavorite,
          }
        },
        { upsert: true, returnOriginal: false }
      );

      res.status(200).json(newVehicle);
    } else {
      res.status(403).json({ error: 'Permission denied' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Problem trying to favorite vehicle, try again' });
  }
})







export default router;