const {
    allBooks,
    postBook,
    getBook,
    putBook,
    removeBook,
  } = require("../controllers/bookController");
  
const router = require("express").Router();
  
const multer = require("multer");


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    },
});

const upload = multer({ storage: storage });
  router.get("/all", allBooks);
  router.post("/new", upload.single('image'), postBook);
  router.get("/:id", getBook);
  router.put("/:id/edit", putBook);
  router.delete("/:id/delete", removeBook);
  
  module.exports = router;