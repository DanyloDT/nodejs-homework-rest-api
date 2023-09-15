const express = require("express");
const ctrl = require("../../controllers/auth");
const { validateBody } = require("../../decorators");
const schema = require("../../schemas/users");
const { authenticate, upload } = require("../../middlewares");

const router = express.Router();

const signupValidate = validateBody(schema.userSignupSchema);
const signinValidate = validateBody(schema.userSigninSchema);
const updateSubscriptionValidate = validateBody(
  schema.updateSubscriptionSchema
);

router.post("/signup", signupValidate, ctrl.signup);
router.post("/signin", signinValidate, ctrl.signin);
router.get("/current", authenticate, ctrl.getCurrent);
router.post("/signout", authenticate, ctrl.signout);
router.patch(
  "/",
  authenticate,
  updateSubscriptionValidate,
  ctrl.updateSubscription
);
router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatars
);

module.exports = router;
