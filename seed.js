const { db, Entry, Author } = require("./server/db");
const { green, red } = require("chalk");

const entries = [
  {
    title: "Test One",
    content: "Test one!",
    tags: ["TEST", "ONE"],
  },
  {
    title: "Test Two",
    content: "Test two!",
    tags: ["TEST", "TWO"],
  },
  {
    title: "Test Three",
    content: "Test three!",
    tags: ["TEST", "THREE"],
  },
];

const authors = [
  {
    handle: "Emma",
    bio: "Hi, my name is Emma!",
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });

    await Promise.all(
      entries.map((entry) => {
        return Entry.create(entry);
      }),
      authors.map((author) => {
        return Author.create(author);
      })
    );
    // seed your database here!
  } catch (err) {
    console.log(err);
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green("Seeding success!"));
      db.close();
    })
    .catch((err) => {
      console.error(red("Oh noes! Something went wrong!"));
      console.error(err);
      db.close();
    });
}
