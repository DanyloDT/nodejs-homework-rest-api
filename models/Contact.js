const { Schema, model } = require("mongoose");
const { handleValidateError, runValidatorsUpdate } = require("./hooks");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);

contactSchema.post("save", handleValidateError);
contactSchema.pre("findOneAndUpdate", runValidatorsUpdate);
contactSchema.post("findOneAndUpdate", handleValidateError);

const Contact = model("contact", contactSchema);

module.exports = Contact;
