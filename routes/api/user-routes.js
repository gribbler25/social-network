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
  addFriend,
  // deleteFriend,
  deleteUser,
} = require("../../controller/user-controller");

router.route("/").get(getUsers).post(createUser);

router.route("/:userId").get(getUser).put(updateUser).delete(deleteUser);

router.route("/:userId/friends/:friendId").post(addFriend);
//.delete(deleteFriend);  this is the route the module gave. but friend is not a schema..

//router.route("/:userId/friends").post(addFriend); // shouldn't it be just ../friends for a post? and how do you post to something that's not a schema/model?

module.exports = router;
