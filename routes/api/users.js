const express = require("express");
const router = express.Router();

//마이페이지 get
router.get("/", (req, res) => {
    res.json({
        msg : "마이페이지"
    })
});

//내 정보 등록 post
router.post("/", (req, res) => {

    const user = {
        email : req.body.email,
        password : req.body.password
    };

    res.json({
        msg : "내 정보를 등록합니다.",
        userinfo : user
    })

});

//내 정보 수정 patch or put
router.put("/", (req, res) => {
    res.json({
        msg : "내 정보를 수정합니다."
    })
});

//내 정보 삭제 delete
router.delete("/", (req, res) => {
    res.json({
        msg : "내 정보를 삭제합니다."
    })
});

module.exports = router;