const express = require("express");
//Requiring or importing all the model objects  from Bookmark model class
const Bookmark = require("../models/bookmark");
const { response } = require("express");
const app = express();
const router = new express.Router();

//Route for the creation of the Bookmark Data
router.post("/bookmarks", (req, res) => {
  const bookmark = new Bookmark(req.body);

  bookmark
    .save()
    .then(() => {
      res.send(bookmark);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

//Reading all the list of Bookmark
router.get("/bookmarks", (req, res) => {
  Bookmark.find({})
    .then((bookmark) => {
      if (!bookmark) {
        res.send("No Bookmark found");
      }

      let count = 0;
      var groups = [];
      bookmark.map((item) => {
        Bgroup = item.BookmarksConfig.content.Bookmarkgroups.Bookmarkgroup;
        count += Bgroup.length;
        if (groups.indexOf(Bgroup[0]["name"]) < 0) {
          groups.push(Bgroup[0]["name"]);
        }
      });

      let result = {
        TotalBookmarks: count,
        Totalgroups: groups.length,
        summary: `${count} bookmarks in ${groups.length} found`,
      };

      res.send(result);
    })

    .catch((error) => {
      res.status(500).send();
    });
});

//Delete a Bookmark
router.delete("/bookmark/:id", (req, res) => {
  const _id = req.params.id;
  Bookmark.findByIdAndDelete(_id)
    .then((bookmark) => {
      if (!bookmark) {
        res.status(400).send("No Bookmark with this id exists");
      }
      res.send("succesfully delete");
    })
    .catch(() => {
      res.send(" Delete failed");
    });
});

module.exports = router;
