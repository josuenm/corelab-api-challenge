import { Router } from 'express'
import User from '../models/User';
import jwt from 'jsonwebtoken';
import 'dotenv/config';





const secret = process.env.JWT_TOKEN


const router = Router()


router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            res.status(401).json({ error: 'Incorrect email or passowrd' });
        } else {
            user.isCorrectPassword(password, function (same: boolean | Error) {
                if (!same) {
                    res.status(401).json({ error: 'Incorrect email or passowrd' });
                } else {
                    const token = jwt.sign({ email }, secret, { expiresIn: '30d' });
                    res.json({ token: token });
                }
            });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal error, please try again' });
    }
})


router.post('/register', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = new User({ email, password });
        await user.save();
        
        const token = jwt.sign({ email }, secret, { expiresIn: '30d' });

        res.json({ token }).status(201);
    } catch {
        res.status(500).json({ error: 'Error registering user' });
    }
})




export default router;