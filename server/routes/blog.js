const express = require('express');
const router = express.Router();

// C R U D

router.get("/",(req, res) => {
    res.send("List Blog's Post");
});

router.get("/:id",(req, res) => {
    res.send("Show Blog's Post");
});

router.post("/", (req, res) => {
    res.send("Create blog");
});

router.patch("/:id", (req, res) => {
    res.send("Update blog");
});

router.delete("/:id", (req, res) => {
    res.send("Delete blog");
});


module.exports = router;