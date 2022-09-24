const { Schema, model } = require("mongoose");

//Thought model sub-document schema
const ReactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxLength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now, //Use a getter method to format the timestamp on query
    // get: function??
  },
});

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now, //Use a getter method to format the timestamp on query
      // get: function ??
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [ReactionSchema],
  }, //Array of nested documents created with the reactionSchema
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

//*virtual reactionCount that retrieves the length of the thought's reactions array field on query.
ThoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});
// const Reaction = model("reaction", ReactionSchema); //???
const Thought = model("thought", ThoughtSchema);

module.exports = Thought;
