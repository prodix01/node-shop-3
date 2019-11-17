const express = require("express");
const router = express.Router();
const productModel = require("../../models/products");

//제품표시 get
router.get("/", (req, res) => {

    productModel
        .find()
        .exec()
        .then(result => {
            res.status(200).json({
                msg : "성공적으로 제품을 로드했습니다.",
                productInfo : result
            });
        })
        .catch(err => {
            res.status(500).json({
                error : err.message
            });
        });


});




//상세제품 불러오기
router.get("/:product_id", (req, res) => {

    const id  = req.params.product_id;

    productModel
        .findById(id)
        .exec()
        .then(doc => {
            console.log(doc);
            if (doc) {
                res.status(200).json({
                    msg : "성공적으로 제품을 불러왔습니다.",
                    productInfo : doc
                });
            }
            else {
                res.status(404).json({
                    msg : "제품이 없습니다."
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                error : err.message
            });
        });
});





//제품등록
router.post("/", (req, res) => {

    const product = new productModel({
       name : req.body.name,
       price : req.body.price
    });

    product
        .save()
        .then(result => {
            console.log(result);
            res.status(200).json({
                msg : "제품등록을 완료했습니다.",
                productInfo : result
            });
        })
        .catch(err => {
            res.status(500).json({
                error : err.message
            });
        });

});





//제품수정
router.patch("/:product_id", (req, res) => {

    const id = req.params.product_id;

    const updateOps = {};

    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }

    productModel
        .update({ _id : id}, {$set : updateOps})
        .exec()
        .then(result => {
            res.status(200).json({
                msg : "성공적으로 제품정보를 수정했습니다.",
                productInfo : result
            })
        })
        .catch(err => {
            res.status(500).json({
                error : err.message
            });
        });

});




//제품삭제
router.delete("/:product_id", (req, res) => {

    const id = req.params.product_id;

    productModel
        .remove({ _id : id })
        .exec()
        .then(result => {
            res.status(200).json({
                msg : "성공적으로 제품정보를 삭제했습니다."
            });
        })
        .catch(err => {
            res.status(500).json({
                error : err.message
            });
        });

});
module.exports = router;
