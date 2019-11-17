const express = require("express");
const router = express.Router();
const orderModel = require("../../models/orders");
const productModel = require("../../models/products");

//주문페이저 표시 get
router.get("/", (req, res) => {

    orderModel
        .find()
        .populate("product", "name price")
        .exec()
        .then(doc => {
            res.status(200).json({
                msg : "장바구니를 불러왔습니다.",
                count : doc.length,
                orderList : doc
            });
        })
        .catch(err => {
            res.status(500).json({
                error : err.message
            });
        });

});






//상세 장바구니 제품 불러오기
router.get("/:order_id", (req, res) => {

    const id = req.params.order_id;

    orderModel
        .findById(id)
        .exec()
        .then(doc => {
            console.log(doc);
            if (doc) {
                res.status(200).json({
                    msg : "장바구니 상세 제품을 불러왔습니다.",
                    orderInfo : doc
                });
            }
            else {
                res.status(400).json({
                    msg : "제품정보가 없습니다."
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                error : err.message
            });
        });
});








//주문추가 post
router.post("/", (req, res) => {

    productModel
        .findById(req.body.productId)
        .then(product => {
            if (!product) {
                return res.status(404).json({
                    msg : "제품이 존재하지 않습니다."
                });
            }
            else {
                const order = new orderModel({
                    product : req.body.productId,
                    quantity : req.body.quantity
                });

                return order.save()
            }
        })
        .then(result => {
            res.status(200).json({
                msg : "장바구니에 추가를 완료했습니다.",
                orderInfo : result
            });
        })
        .catch(err => {
            res.status(500).json({
                error : err.message
            });
        });


});

//주문수정 patch
router.patch("/:order_id", (req, res) => {

    const id = req.params.order_id;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }

    orderModel
        .update({ _id : id }, {$set : updateOps})
        .exec()
        .then(resuslt => {
            res.status(200).json({
                msg : "성공적으로 장바구니 수량을 수정했습니다.",
                orderInfo : resuslt
            })
        })
        .catch(err => {
            res.status(500).json({
                error : err.message
            });
        });

});
//주문삭제 delete
router.delete("/:order_id", (req, res) => {

    const id  = req.params.order_id;
    orderModel
        .remove({ _id : id })
        .exec()
        .then(result => {
            res.status(200).json({
                msg : "성공적으로 장바구니에서 제품을 제거했습니다."
            });
        })
        .catch(err => {
            res.status(500).json({
                error : err.message
            });
        });


});
module.exports = router;