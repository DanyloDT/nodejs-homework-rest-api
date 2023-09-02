const contacts = require("../models/contacts");
const { HttpError } = require("../helpers");
const { ctrlWrapper } = require("../decorators");

const getAllContacts = async (req, res) => {
  const result = await contacts.listContacts();
  res.json(result);
};

const getByIdContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.getContactById(contactId);
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

const addNewContact = async (req, res) => {
  const result = await contacts.addContact(req.body);
  res.status(201).json(result);
};

const updateByIdContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.updateContact(contactId, req.body);
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

const deleteContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.removeContact(contactId);
  if (!result) {
    throw HttpError(404);
  }
  res.json({ message: "contact deleted" });
};

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  getByIdContact: ctrlWrapper(getByIdContact),
  addNewContact: ctrlWrapper(addNewContact),
  updateByIdContact: ctrlWrapper(updateByIdContact),
  deleteContact: ctrlWrapper(deleteContact),
};
