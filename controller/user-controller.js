const { Thought, User } = require("./Models");

const userController = {
  getUsers(req, res) {
    User.find({});
  },
  getUserById({ params }, res) {
    User.findOne({ _id: params.id });
  },
  createUser({ params, body }, res) {
    User.create(body);
  },
  addFriend({}) {
    User.findOneAndUpdate();
  },
  deleteUser({}) {
    User.findOneAndDelete();
  },
};

module.exports = userController;
