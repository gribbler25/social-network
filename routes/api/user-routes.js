// example data
// {
//     "username": "lernantino",
//     "email": "lernantino@gmail.com"
//   }

const router = require("express").Router();
const {
  getUsers,
  createUser,
  getUser,
  updateUser,
  // addFriend,
  // deleteFriend,
  deleteUser,
} = require("../../controller/user-controller");

// "/api/users" TODO: GET all users
// GET a single user by its _id and populated thought and friend data
// POST a new user
// PUT to update a user by its _id
// DELETE to remove user by its _id
// "/api/users/:userId/friends/:friendId" TODO: POST to add a new friend to a user's friend list
// DELETE to remove a friend from a user's friend list

router.route("/").get(getUsers).post(createUser);

router.route("/:userId").get(getUser).put(updateUser).delete(deleteUser);

// router.route("/:userId/friends/:friendId").delete(deleteFriend); // this is the route the module gave. but friend is not a schema..

// router.route("/:userId/friends").post(addFriend); // shouldn't it be just ../friends for a post? and how do you post to something that's not a schema/model?

module.exports = router;
