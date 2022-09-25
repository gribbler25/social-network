const { Schema, model } = require("mongoose");
// var validator = require("validator");
const { default: isEmail } = require("validator/lib/isEmail");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // match: [
      //   /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      //   "Please fill a valid email address",
      // ],
      //or validate: [validateEmail, 'please enter a valid email address']
      validate: [isEmail, "invalid email"],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  {
    //this is a second object in new Schema()
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);
//friends:  Array of _id values referencing the User model (self-reference)

//**virtual friendCount that retrieves the length of the user's friends array field on query.
UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("user", UserSchema);

module.exports = User;
