const express = require("express");
const router = express.Router();

const db = require("../models");
const Blog = db.Blog;

// C R U D

router.get("/", async (req, res) => {
  const page = +req.query.page || 1;
  const limit = parseInt(req.query.size) || 1;
  const offset = Math.floor(limit * (page - 1));

  const items = await Blog.findAll({ limit, offset });
  const count = await Blog.count();

  res.status(200).json({
    items,
    page,
    size: limit,
    totalItems: count,
    totalPages: Math.ceil(count / limit),
    message: "found",
  });
});

router.get("/:id", async (req, res) => {
  const item = await Blog.findOne({ where: { id: req.params.id } });
  if (!item) {
    return res.status(404).json({
      message: "not found",
    });
  }
  res.status(200).json({
    item,
    message: "found",
  });
});

router.post("/", async (req, res) => {
  // req.query => query params ( ?page=1 )
  // req.params => path params ( /:id  )
  // req.body => body params => ( POST )
  const item = await Blog.create(req.body);
  res.status(200).json({
    item,
    message: "created",
  }); // 201 Created
});

router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const item = await Blog.findOne({ where: { id } });
  if (!item) {
    return res.status(404).json({
      message: "not found",
    });
  }
  await Blog.update(req.body, { where: { id } });
  res.status(200).json({
    item,
    message: "updated",
  });
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const item = await Blog.findOne({ where: { id } });
  if (!item) {
    return res.status(404).json({
      message: "not found",
    });
  }
  await Blog.destroy({ where: { id } });
  res.status(200).json({ message: "deleted" }); // 204 No Content
});

module.exports = router;
