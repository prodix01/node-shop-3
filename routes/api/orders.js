const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
    res.json({
        msg : "주문페이지"
    })
});

module.exports = router;