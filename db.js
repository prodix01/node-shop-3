const mongoose = require("mongoose");


const dbAddress = "mongodb+srv://user1:aa1234@cluster0-nbev1.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(dbAddress, {useNewUrlParser : true, useUnifiedTopology: true})
    .then(() => console.log("몽고 서버에 접속합니다."))
    .catch(err => console.log(err.message));

