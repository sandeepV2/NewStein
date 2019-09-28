import {UserController} from "./../controller/userController"
import {AuthenticateService} from "./../middleware/authenticate"
import {Router} from 'express'

let userControllerObj = new UserController();

export let userRoutes = Router()
userRoutes.get('/', AuthenticateService.authenticate, userControllerObj.GetAllUser);


userRoutes.get('/getUser/:userId', userControllerObj.GetUser);
userRoutes.post('/register', userControllerObj.Register);
userRoutes.post('/login', userControllerObj.Login);