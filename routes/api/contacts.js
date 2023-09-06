const express = require("express");
const ctrl = require("../../controllers/contacts");
const { validateBody } = require("../../decorators");
const schame = require("../../schemas/contacts");
const { isValidId } = require("../../middlewares");

const addContactValidate = validateBody(schame.addContactSchema);
const updateContactFavoriteValidate = validateBody(
  schame.contactUpdateFavoriteSchema
);

const router = express.Router();

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
