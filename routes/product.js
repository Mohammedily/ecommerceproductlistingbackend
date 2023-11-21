const express = require("express");
const productRouter = express.Router();
const Product = require("../model/product");

productRouter.post("/admin/product/post", async(req, res) => {
    const { name, description, img,price, category,  qty, admin } = req.body;

    let product_post;
    try {
        product_post = new Product({
            name: name, description: description, img :img,price: price, category: category,  qty: qty, admin: admin 
        });

        await product_post.save()
    } catch (error) {
        return res.status(409).json({ message: "product error" })
    }

     return res.status(201).json({ product_post, message:"Product post successfully" })

});

productRouter.get("/admin/product/get", async(req, res) => {
    
    let product;
    try {
        product = await Product.find();
    } catch (error) {
         return res.status(409).json({ message:"product error" })
    };

    return res.status(201).json({ product });
})

productRouter.get("/admin/product/get/:id", async(req, res) => {
    
    let id = req.params.id;

    

    let product;
    try {
        product = await Product.findById( id );
    } catch (error) {
         return res.status(409).json({ message:"product error" })
    };

    return res.status(201).json({ product });
});


productRouter.put("/admin/product/update/:id", async(req, res) => {
    
    let id  = req.params.id;


    
    let {name ,description, price,category,qty}=req.body;
    
   let product_edit;
   try {
    product_edit = await Product.findByIdAndUpdate(id,{ name ,description,  price,category,qty })
   } catch (error) {
    return res.status(409).json({message: "product update error" });
   }

   return res.status(200).json({ message: "product update successfully" });


});

productRouter.delete("/admin/product/delete/:id", async(req, res) => {
    let id = req.params.id;

    let sa;
    try {
        sa = await Product.findByIdAndDelete({_id:id});
    } catch (error) {
       console.log(error)
        // return res.status(409).json({message: "product delete unsuccesfully"});
    }

    console.log(sa)

    return res.status(200).json({ message: "product delete successfully" });

});

module.exports = productRouter;