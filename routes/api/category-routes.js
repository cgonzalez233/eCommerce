const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  try {
    const results = await Category.findAll({});
    console.log(results);
    res.json(results);
  } catch (err) {
    console.log(err);
  }
  // find all categories
  // be sure to include its associated Products
});

router.get("/:id", async (req, res) => {
  try {
    const results = await Category.findAll({ where: { id: req.params.id } });
    console.log(results);
    res.json(results);
  } catch (err) {
    console.log(err);
  }
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post("/", async (req, res) => {
  try {
    const results = await Category.create(req.body);
    console.log(results);
    res.json(results);
  } catch (err) {
    console.log(err);
  }
  // create a new category
});

router.put("/:id", async (req, res) => {
  try {
    const results = await Category.update(req.body, {
      where: { id: req.params.id },
    });
    console.log(results);
    res.json(results);
  } catch (err) {
    console.log(err);
  }
  // update a category by its `id` value
});

router.delete("/:id", async (req, res) => {
  try {
    const results = await Category.destroy({ where: { id: req.params.id } });
    console.log(results);
    res.json(results);
  } catch (err) {
    console.log(err);
  }
  // delete a category by its `id` value
});

module.exports = router;
