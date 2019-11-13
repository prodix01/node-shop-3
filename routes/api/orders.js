const express = require("express");
const router = express.Router();

//주문페이저 표시 get
router.get("/", (req, res) => {
    res.json({
        msg : "주문페이지"
    })
});

//주문추가 post
router.post("/", (req, res) => {
    res.json({
        msg : "주문을 추가합니다."
    })
});

//주문수정 patch
router.patch("/", (req, res) => {
    res.json({
        msg : "주문을 수정합니다."
    })
});
//주문삭제 delete
router.delete("/", (req, res) => {
    res.json({
        msg : "주문을 취소합니다."
    })
});
module.exports = router;