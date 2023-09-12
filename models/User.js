const { Schema, model } = require("mongoose");
const { handleValidateError, runValidatorsUpdate } = require("./hooks");
const { subscriptionList } = require("../constants/user-constants");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    subscription: {
      type: String,
      enum: subscriptionList,
      default: "starter",
    },
    token: String,
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleValidateError);
userSchema.pre("findOneAndUpdate", runValidatorsUpdate);
userSchema.post("findOneAndUpdate", handleValidateError);

const User = model("user", userSchema);

module.exports = User;
