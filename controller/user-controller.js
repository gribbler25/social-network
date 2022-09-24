const { Thought, User } = require("../Model"); //friend is just a field array, so def not even a schema, can't use .delete ??..

const userController = {
  getUsers(req, res) {
    User.find({})
      .populate({
        path: "thoughts",
      })
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  createUser({ body }, res) {
    //is the {body} creating an object called 'body' of what is in the body of fetch request, method POST? And is posting in insomnia taking the place of that front end fetch request?
    User.create(body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.userId })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.status(400).json(err));
  },
  getUser({ params }, res) {
    User.findOne({ _id: params.userId })
      .populate({
        path: "thoughts",
        select: "-__v",
      })
      .select("-__v")
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "no User with that id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        conosole.log(err);
        res.status(400).json(err);
      });
  },

  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.userId }, body, {
      new: true,
      runValidators: true,
    })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "no User with that id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.status(400).json(err));
  },

  //   addFriend({params},res) {
  //     User.findOneAndUpdate();
  //   },
  //   deleteFriend({params}, res) {
  //     User.findOneAndUpdate("_id: params.userId");
  //   },
};

module.exports = userController;
