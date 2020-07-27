const express = require("express");
const router = express.Router();
const { Entry, Author } = require("../db");

//get all journal entries
router.get("/", async (req, res, next) => {
  try {
    const authors = await Author.findAll();
    res.json(authors);
  } catch (err) {
    next(err);
  }
});
//get entry by id
router.get("/:id", async (req, res, next) => {
  try {
    const author = await Author.findOne({
      where: {
        id: req.params.id,
      },
      include: Entry,
    });
    res.json(author);
  } catch (err) {
    next(err);
  }
});

//post new entry
router.post("/", async (req, res, next) => {
  try {
    const { handle, imageUrl, bio } = req.body;
    res.status(201).json(await Author.create({ handle, imageUrl, bio }));
  } catch (err) {
    next(err);
  }
});

//delete entry
router.delete("/:id", async (req, res, next) => {
  try {
    await Author.destroy({ where: { id: req.params.id } });
    res.status(204).send("deleted");
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const author = await Author.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (author) {
      let { newHandle, newImageUrl, newBio } = req.body;

      if (!newHandle) newHandle = author.handle;
      if (!newImageUrl) newImageUrlt = author.imageUrl;
      if (!newBio) newBio = author.bio;

      await author.update({
        handle: newHandle,
        imageUrl: mewImageUrl,
        bio: newBio,
      });
      res.status(201).json(author);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});
