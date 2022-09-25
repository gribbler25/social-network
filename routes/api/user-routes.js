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
  deleteFriend,
  deleteUser,
} = require("../../controller/user-controller");

router.route("/").get(getUsers).post(createUser);

router.route("/:userId").get(getUser).put(updateUser).delete(deleteUser);

router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

//  this is the route the module gave. but friend is not a schema..jsut push to the array?

module.exports = router;
