const express = require("express");
const router = express.Router();
const { Entry, Author } = require("../db");

//get all journal entries
router.get("/", async (req, res, next) => {
  try {
    const entries = await Entry.findAll();
    res.json(entries);
  } catch (err) {
    next(err);
  }
});
//get entry by id
router.get("/:id", async (req, res, next) => {
  try {
    const entry = await Entry.findOne({
      where: {
        id: req.params.id,
      },
      include: Author,
    });
    res.json(entry);
  } catch (err) {
    next(err);
  }
});

//post new entry
router.post("/", async (req, res, next) => {
  try {
    const { title, imageUrl, content, tags, date } = req.body;
    res
      .status(201)
      .json(await Entry.create({ title, imageUrl, content, tags, date }));
  } catch (err) {
    next(err);
  }
});

//delete entry
router.delete("/:id", async (req, res, next) => {
  try {
    await Entry.destroy({ where: { id: req.params.id } });
    res.status(204).send("deleted");
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const entry = await Entry.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (entry) {
      let { newTitle, newContent, newTags, newDate } = req.body;

      if (!newTitle) newTitle = entry.title;
      if (!newContent) newContent = entry.content;
      if (!newTags) newTags = entry.tags;

      await entry.update({
        title: newTitle,
        content: newContent,
        tags: newTags,
        date: new Date(),
      });
      res.status(201).json(entry);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
