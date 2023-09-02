const express = require("express");
const ctrl = require("../../controllers/contacts");
const { validateBody } = require("../../decorators");
const schame = require("../../schemas/contacts");

const addContactValidate = validateBody(schame.addContactSchema);

const router = express.Router();

router.get("/", ctrl.getAllContacts);

router.get("/:contactId", ctrl.getByIdContact);

router.post("/", addContactValidate, ctrl.addNewContact);

router.put("/:contactId", addContactValidate, ctrl.updateByIdContact);

router.delete("/:contactId", ctrl.deleteContact);

module.exports = router;
