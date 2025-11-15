import {Router} from "express"
import validateToken from "../middleware/validateToken.js";
import forosController from "../controllers/foros.controller.js";

const forosRoutes = Router();

forosRoutes.get('/', validateToken , forosController.getAll )
forosRoutes.post('/new', validateToken, forosController.createOne)
forosRoutes.get('/:id', validateToken, forosController.getOne)
forosRoutes.delete('/destroy/:id', validateToken, forosController.deleteOne)
forosRoutes.put('/update/:id',validateToken,  forosController.updateOne)

export default forosRoutes;