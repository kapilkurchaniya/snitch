import {Router} from 'express';
import {validateSignup} from '../validator/auth.validator.js';


const router = Router();

router.post('/register', validateSignup );

export default router;