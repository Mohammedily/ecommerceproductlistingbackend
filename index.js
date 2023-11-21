const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRouter = require("./routes/user");
const adminRouter = require("./routes/admin");
const productRouter = require("./routes/product");
const cartRouter = require("./routes/cart");
const addressrouter = require("./routes/address");
const orderrouter = require("./routes/order");

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("mongodb connected"))
.catch((error) => console.log(error));

app.use(express.json());
app.use(cors());

app.use(userRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(cartRouter);
app.use(addressrouter);
app.use(orderrouter)

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log('port connected...')
})