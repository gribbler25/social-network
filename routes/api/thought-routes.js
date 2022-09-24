// example data
// {
//     "thoughtText": "Here's a cool thought...",
//     "username": "lernantino",
//     "userId": "5edff358a0fcb779aa7b118b"
//   }

const router = require("express").Router();
const {
  getThoughts,
  createThought,
  getThought,
  updateThought,
  deleteThought,
} = require("../../controller/thought-controller");
const {
  addReaction,
  deleteReaction,
} = require("../../controller/reaction-controller");

router.route("/").get(getThoughts).post(createThought);

router
  .route("/:thoughtId")
  .get(getThought)
  .put(updateThought)
  .delete(deleteThought);

router.route("/:thoughtId/reactions").post(addReaction);

router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
