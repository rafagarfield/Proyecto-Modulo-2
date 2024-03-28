const {Router} = require("express");
const { getEpisode, postEpisode, putEpisode, deleteEpisode } = require("../controllers/episodeController");
const episodeRouter = Router();


episodeRouter.get("/",getEpisode);
episodeRouter.post("/",postEpisode);
episodeRouter.put("/",putEpisode);
episodeRouter.delete("/",deleteEpisode);


module.exports = episodeRouter;