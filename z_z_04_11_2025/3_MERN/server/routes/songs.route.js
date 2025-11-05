import {Router} from "express"
import songsController from "../controllers/songs.controller.js"
import validateToken from "../middleware/validateToken.js";

const songsRoutes = Router();

songsRoutes.get('/', validateToken , songsController.getAll )
songsRoutes.post('/', songsController.createOne)
songsRoutes.get('/:id', validateToken, songsController.getOne)
songsRoutes.delete('/:id', validateToken, songsController.deleteOne)
songsRoutes.put('/:id',validateToken,  songsController.updateOne)

export default songsRoutes;