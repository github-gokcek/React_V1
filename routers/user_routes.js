const express = require("express");
const User = require("../models/User");
const router = express.Router();

// Yeni kullanıcı ekleme
router.post("/users", async (req, res) => {
  const userData = req.body;
  const registeredBy = req.headers.authorization;

  // En yüksek customId'yi bul
  const lastUser = await User.findOne().sort({ customId: -1 });
  const newCustomId = lastUser ? lastUser.customId + 1 : 1;
  const newUser = new User({
    ...userData,
    registeredBy: registeredBy || "unknown", // Default olarak "unknown" atar
  });
  /*
  const newUser = new User({
    ...userData,
    customId: newCustomId,
    registeredBy: req.headers["x-admin-username"],
  });
  */
  try {
    await newUser.save();
    res.status(201).send(newUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Tüm kullanıcıları alma
router.get("/users", async (req, res) => {
  try {
    const users = await User.find({}).limit(100);
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Belirli bir kullanıcıyı güncelleme
router.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Belirli bir kullanıcıyı silme
router.delete("/users/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "User deleted" });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
