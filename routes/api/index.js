const router = require("express").Router();
const savedBooksRoutes = require("./saved-books");

router.use("/saved", savedBooksRoutes);

module.exports = router;
