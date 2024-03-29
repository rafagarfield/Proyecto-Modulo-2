const {Router} = require('express');
const { getDisc, postDisc, putDisc, deleteDisc } = require('../controllers/discContoller');
const discRouter= Router();

discRouter.get("/", getDisc)
discRouter.post("/", postDisc);
discRouter.put("/", putDisc);
discRouter.delete("/", deleteDisc);

module.exports = discRouter;