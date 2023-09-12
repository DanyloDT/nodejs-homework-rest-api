const Joi = require("joi");

const { subscriptionList } = require("../constants/user-constants");

const userSignupSchema = Joi.object({
  email: Joi.string().required().messages({
    "any.required": "missing required email field",
  }),
  password: Joi.string().required().messages({
    "any.required": "missing required password field",
  }),
  subscription: Joi.string()
    .valid(...subscriptionList)
    .messages({
      "any.only": `Subscription can only be of the following types: ${subscriptionList} `,
    }),
});

const userSigninSchema = Joi.object({
  email: Joi.string().required().messages({
    "any.required": "missing required email field",
  }),
  password: Joi.string().required().messages({
    "any.required": "missing required password field",
  }),
});

const updateSubscriptionSchema = Joi.object({
  subscription: Joi.string()
    .valid(...subscriptionList)
    .messages({
      "any.only": `Subscription can only be of the following types: ${subscriptionList} `,
    }),
});

module.exports = {
  userSignupSchema,
  userSigninSchema,
  updateSubscriptionSchema,
};
