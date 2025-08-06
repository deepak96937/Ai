import express from 'express';
import { Login, Logout, signUp } from '../controllers/auth.controllers.js';

const authRoute = express.Router();

authRoute.post('/signup', signUp);
authRoute.post('/login', Login);
authRoute.post('/logout', Logout);

export default authRoute;