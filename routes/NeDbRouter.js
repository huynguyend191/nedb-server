const express = require("express");
const nedbservice = require("../services/nedbservice");
const async = require('async')

const router = express.Router();

router.post("/:number", (req, res, next) => {
  console.log('Insert')
  nedbservice.InsertUsers(req, res)
});

router.post("/bulk/:number", (req, res, next) => {
  console.log('Bulk Insert')
  nedbservice.BulkInsertUsers(req, res)
});
router.get("/", (req, res, next) => {
  console.log('GetAll')
  nedbservice.GetAllUsers(req, res);
});
router.get("/:min/:max", (req, res, next) => {
  console.log('Get')
  nedbservice.GetUsers(req, res);
});

router.put("/:min/:max", (req, res, next) => {
  console.log('Update')
  nedbservice.UpdateUsers(req, res)
 
});

router.delete("/:min/:max",  (req, res, next) => {
  console.log('Delete')
  nedbservice.DeleteUsers(req, res)
});

module.exports = router;