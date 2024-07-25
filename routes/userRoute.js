const express = require('express');
const router = express.Router();
const newUser = require("../controller/createUser.js");
const searchByCity = require("../controller/serachUserByCity.js");
const searchByName = require("../controller/serachUserByName.js");
const getUserByPagination = require("../controller/paginationUserData.js");
router.post("/create",newUser);
router.get("/by-city", searchByCity);
router.get("/by-name",searchByName);
router.get("/pagination",getUserByPagination)

module.exports = router;