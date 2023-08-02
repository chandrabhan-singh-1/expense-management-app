const express = require("express");
const {
  addTransaction,
  getAllTransactions,
  editTransaction,
  deleteTransaction,
} = require("../controllers/transactionCtrl");

// router object
const router = express.Router();

// routes
// add Transaction POST method
router.post("/add-transaction", addTransaction);

// edit Transaction POST method
router.post("/edit-transaction", editTransaction);

// delete Transaction POST method
router.post("/delete-transaction", deleteTransaction);

// get All Transaction
router.post("/get-transactions", getAllTransactions);

module.exports = router;
