const { Thought } = require("../Model");

//..then get a reactionID, and update the Thought model's reaction field??
const reactionController = {
  addReaction({ params, body }, res) {
    console.log(body, "line6");
    Thought.findOneAndUpdate(
      { _id: params.id },
      { $push: { reactions: body } },
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
      { _id: params.thoughtId },
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
