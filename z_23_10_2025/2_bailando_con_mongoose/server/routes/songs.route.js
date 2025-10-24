import {Router} from "express"
import songsController from "../controllers/songs.controller.js"

const songsRoutes = Router();

songsRoutes.get('/', songsController.getAll )
songsRoutes.post('/', songsController.createOne)
songsRoutes.get('/:id', songsController.getOne)
songsRoutes.delete('/:id', songsController.deleteOne)
songsRoutes.put('/:id', songsController.updateOne)

export default songsRoutes;