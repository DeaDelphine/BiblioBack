const {
    allBorrows,
    postBorrow,
    getBorrow,
    putBorrow,
    removeBorrow,
  } = require("../controllers/borrowController");
  
  const router = require("express").Router();
  router.get("/all", allBorrows);
  router.post("/new", postBorrow);
  router.get("/:id", getBorrow);
  router.put("/:id/edit", putBorrow);
  router.delete("/:id/delete", removeBorrow);
  
  module.exports = router;