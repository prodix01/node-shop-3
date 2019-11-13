const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        msg : "제품들표시"
    })
});

module.exports = router;
