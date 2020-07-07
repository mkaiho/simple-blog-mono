import * as express from 'express'
import UserAllController from '../controllers/user/all'

const router = express.Router()

/* GET users listing. */
router.get('/', (req, res, _next) => {
  res.status(200).send(UserAllController.getAllUsers())
})

export default router
