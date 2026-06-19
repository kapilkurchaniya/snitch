import {body, validationResult} from 'express-validator';

function validateRequest(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
    }

export const validateSignup = [
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('role').isIn(['buyer', 'seller', 'admin']).withMessage('Invalid role'),
    body('contact').notEmpty().withMessage('Contact is required'),
    body('contact').matches(/^[0-9]{10}$/).withMessage('Contact must be a valid 10-digit number'),
    body('Fullname').notEmpty().withMessage('Fullname is required'),
    validateRequest
];
