const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  try {
    const results = await Tag.findAll({});
    console.log(results);
    res.json(results);
  } catch (err) {
    console.log(err);
  }
  // find all tags
  // be sure to include its associated Product data
});

router.get("/:id", async (req, res) => {
  try {
    const results = await Tag.findAll({ where: { id: req.params.id } });
    console.log(results);
    res.json(results);
  } catch (err) {
    console.log(err);
  }
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post("/", async (req, res) => {
  try {
    const results = await Tag.create(req.body);
    console.log(results);
    res.json(results);
  } catch (err) {
    console.log(err);
  }
  // create a new tag
});

router.put("/:id", async (req, res) => {
  try {
    const results = await Tag.update(req.body, {
      where: { id: req.params.id },
    });
    console.log(results);
    res.json(results);
  } catch (err) {
    console.log(err);
  }
  // update a tag's name by its `id` value
});

router.delete("/:id", async (req, res) => {
  try {
    const results = await Tag.destroy({ where: { id: req.params.id } });
    console.log(results);
    res.json(results);
  } catch (err) {
    console.log(err);
  }
  // delete on tag by its `id` value
});

module.exports = router;
