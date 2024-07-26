const express = require('express');
const router = express.Router();
const newUser = require("../controller/createUser.js");
const searchByCity = require("../controller/serachUserByCity.js");
const searchByName = require("../controller/serachUserByName.js");
const getUserByPagination = require("../controller/paginationUserData.js");
const filterUser = require("../controller/getUserDataByAllFiltering.js");
router.post("/create",newUser);
router.get("/by-city", searchByCity);
router.get("/by-name",searchByName);
router.get("/pagination",getUserByPagination)
router.get("/get-user-by-city-name",filterUser);

module.exports = router;