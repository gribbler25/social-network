const { Thought } = require("../Model");

//..then get a reactionID, and update the Thought model's reaction field??
const reactionController = {
  addReaction({ params, body }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId }, //this value is from "thoughts/:thoughtId/reactions"
      { $push: { reactions: body } }, //this body value is what user typed in and follows rules of the ReactionSchema
      {
        new: true,
        runValidators: true,
      }
    )
      .then((dbReactData) => res.json(dbReactData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  deleteReaction({ params }, res) {
    Thought.findOneAndDelete(
      { _id: params.thoughtId }, //gets these values from "thoughts/:thoughtId/reactions/:reactionId" params.
      { $pull: { _id: params.reactionId } }
    )
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({ message: "No Thought found with this id!" });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => res.status(400).json(err));
  },
};

module.exports = reactionController;
