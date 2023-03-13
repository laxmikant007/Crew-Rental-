require("dotenv").config();
const express = require('express');
const cors = require('cors');

const app = express();

const connectDB = require('./db/connect');


const PORT = process.env.PORT || 5000;

const products_routes = require("./routes/products")

app.get('/', (req, res) => {
    res.send('Hi I am Live!');
});

app.use(cors());
app.use("/api/products" , products_routes);


const start = async () => {
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }catch(error){
        console.log(error);
    }
}

start();

