const express = require("express");
const ctrl = require("../../controllers/contacts");
const { validateBody } = require("../../decorators");
const schema = require("../../schemas/contacts");
const { isValidId, authenticate } = require("../../middlewares");

const addContactValidate = validateBody(schema.addContactSchema);
const updateContactFavoriteValidate = validateBody(
  schema.contactUpdateFavoriteSchema
);

const router = express.Router();

router.use(authenticate);

router.get("/", ctrl.getAllContacts);
router.get("/:contactId", isValidId, ctrl.getByIdContact);
router.post("/", addContactValidate, ctrl.addNewContact);
router.put(
  "/:contactId",
  isValidId,
  addContactValidate,
  ctrl.updateByIdContact
);
router.patch(
  "/:contactId/favorite",
  isValidId,
  updateContactFavoriteValidate,
  ctrl.updateFavorite
);
router.delete("/:contactId", isValidId, ctrl.deleteContact);

module.exports = router;
