const { Thought, User } = require("./Models");

const thoughtController = {
  getThoughts(req, res) {
    Thought.find({});
  },
  getThoughtById({ params }, res) {
    Thought.findOne({ _id: params.id });
  },
  createThought({ params, body }, res) {
    Thought.create(body);
  },
  addReaction({}) {
    Thought.findOneAndUpdate();
  },
  deleteThought({}) {
    Thought.findOneAndDelete();
  },
};

module.exports = thoughtController;
