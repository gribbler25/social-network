const { Schema, model } = require("mongoose");

const { default: isEmail } = require("validator/lib/isEmail");

const UserSchema = new Schema({
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
    validate: [isEmail, "invaid email"],
    //or validate: [validateEmail, 'please enter a valid email address']
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "thoughts",
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  ],
});
//friends:  Array of _id values referencing the User model (self-reference)

//**virtual friendCount that retrieves the length of the user's friends array field on query.
UserSchema.virtual("friendCount").get(function () {
  return this.friends.length, 0;
});

const User = model("user", UserSchema);

module.exports = User;
