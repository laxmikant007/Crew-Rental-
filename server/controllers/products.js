const Product = require('../models/product.js');


// const Product = require('../models/product.js');

const getAllProducts = async (req, res) => {
    const { company, name, price, featured, sort, select, id } = req.query;
    const queryObject = {};
    if (company) {
        queryObject.company = { $regex: company, $options: "i" };
        console.log("Query Object  is", queryObject)
    }

    if (name) {
        queryObject.name = { $regex: name, $options: "i" };
        console.log("Query Object  is", queryObject)
    }

    if (price) {
        queryObject.price = price;
        console.log("Query Object  is", queryObject)
    }

    if (featured) {
        queryObject.featured = featured;
        
        console.log("Query Object  is", queryObject)
    }

    if (id) {
        queryObject.id = id;
        console.log("Query Object  is", queryObject)
    }


    let apiData = Product.find(queryObject);

    if (sort) {
        let sortFix = sort.replace(",", " ");
        apiData = apiData.sort(sortFix);
    }

    if (select) {
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
    }

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 12;

    let skip = (page - 1) * limit
    apiData = apiData.skip(skip).limit(limit);

    const myData = await apiData.sort("name");
    console.log("Query is", req.query);
    res.status(200).json(myData);
}


const getAllProductsTesting = async (req, res) => {
    const { company, name, price, featured } = req.query;

    const queryObject = {};

    const myData = await Product.find(req.query).select("name company");
    res.status(200).json({ myData });
}


module.exports = { getAllProducts, getAllProductsTesting }

