const express = require("express");
const cartRouter = express.Router();
const Cart = require("../model/cart");

cartRouter.post("/cart/product/post", async(req, res) => {
    const { name, description, img,price, category,  qty, admin, user } = req.body;

    let cart_post;
    try {
        cart_post = new Cart({
            name: name, description: description, img :img,price: price, category: category,  qty: qty, admin: admin, user: user
        });

        await cart_post.save()
    } catch (error) {
        return res.status(409).json({ message: "cart error" })
    }

     return res.status(201).json({ cart_post, message:"Cart post successfully" })

});

cartRouter.get("/cart/product/get", async(req, res) => {
    
    let product;
    try {
        product = await Cart.find();
    } catch (error) {
         return res.status(409).json({ message:"cart error" })
    };

    return res.status(201).json({ product });
})



cartRouter.delete("/cart/product/delete/:id", async(req, res) => {
    let id = req.params.id;
 
   

    let sa;
    try {
        sa = await Cart.findByIdAndDelete({_id:id});
    } catch (error) {
       console.log(error)
        // return res.status(409).json({message: "product delete unsuccesfully"});
    }

   

    return res.status(200).json({ message: "cart delete successfully" });

});

module.exports = cartRouter;