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

// "/api/thoughts"  TODO: GET to get all thoughts
// GET to get a single thought by its _id
// POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
// PUT to update a thought by its _id
// DELETE to remove a thought by its _id
// "/api/thoughts/:thoughtId/reactions" TODO:POST to create a reaction stored in a single thought's reactions array field
// DELETE to pull and remove a reaction by the reaction's reactionId value

router.route("/").get(getThoughts).post(createThought);

router
  .route("/:thoughtId")
  .get(getThought)
  .put(updateThought)
  .delete(deleteThought);

router.route("/:thoughtId/reactions").post(addReaction);

router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
