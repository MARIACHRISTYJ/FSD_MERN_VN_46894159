const express = require("express");
const { createUser, getUsers, updateUser, deleteUser } =
  require("../controllers/userController");

const router = express.Router();

router.post("/post", createUser);       
router.get("/get", getUsers);          
router.put("/put/:id", updateUser);     
router.delete("/delete/:id", deleteUser);  

module.exports = router;
