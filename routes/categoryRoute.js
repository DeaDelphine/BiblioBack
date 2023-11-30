const {
    allCategories,
    postCategory,
    getCategory,
    putCategory,
    removeCategory,
  } = require("../controllers/categoryController");
  
  const router = require("express").Router();
  router.get("/all", allCategories);
  router.post("/new", postCategory);
  router.get("/:id", getCategory);
  router.put("/:id/edit", putCategory);
  router.delete("/:id/delete", removeCategory);
  
  module.exports = router;