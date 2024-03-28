const {Router} = require('express');
const { getUser, postUser, putUser, deleteUser } = require('../controllers/userController');
const userRouter = Router();

userRouter.get('/', getUser);
userRouter.post('/',postUser);
userRouter.put('/',putUser);
userRouter.delete('/',deleteUser);

module.exports = userRouter;