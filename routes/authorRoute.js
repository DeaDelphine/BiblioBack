const {
    allAuthors,
    postAuthor,
    getAuthor,
    putAuthor,
    removeAuthor,
  } = require("../controllers/authorController");
  
  const router = require("express").Router();
  router.get("/all", allAuthors);
  router.post("/new", postAuthor);
  router.get("/:id", getAuthor);
  router.put("/:id/edit", putAuthor);
  router.delete("/:id/delete", removeAuthor);
  
  module.exports = router;