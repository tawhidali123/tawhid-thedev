const express = require("express");
const router = express.Router()


router.get("/", (req, res, next) => {
    res.render("index", {title: "Tawhid Ali | Software Engineer Developer"});
});


module.exports = router;