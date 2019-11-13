const express = require("express");
const app = express();

const port = 1541;

app.listen(port ,console.log("서버를 시작합니다."));

app.use((req, res) => {
    res.json({
        msg : "홈페이지에 오신걸 환영합니다!"
    })
});