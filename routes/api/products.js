const express = require("express");
const router = express.Router();

//제품표시 get
router.get("/", (req, res) => {
    res.json({
        msg : "제품들표시"
    })
});

//제품등록
router.post("/", (req, res) => {
    res.json({
        msg : "제품을 등록합니다."
    })
});

//제품수정
router.patch("/", (req, res) => {
    res.json({
        msg : "제품을 수정합니다."
    })
});
//제품삭제
router.delete("/", (req, res) => {
    res.json({
        msg : "제품을 삭제합니다."
    })
});
module.exports = router;
