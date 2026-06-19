import model from '../models/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config/config.js';


async function sendtokenforuser(user, res) {
    const token = jwt.sign({ id: user._id }, config.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
    console.log("Token sent successfully");
}

export const register = async (req, res) => {
    try {
        const { email, password, contact, Fullname, role } = req.body;
        const existingUser = await model.findOne({
            $or: [{ email }, { contact }]
        });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const user = await userModel.create({ email, password,contact, Fullname, role });
        await user.save();
        
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};