const mongoose = require('mongoose');

// uri = "mongodb+srv://snappylaxmikant:Animes123@cluster0.eipb4s1.mongodb.net/Cluster0?retryWrites=true&w=majority";



// mongodb+srv://snappylaxmikant:Animes123@cluster0.eipb4s1.mongodb.net/Cluster0?retryWrites=true&w=majority

const connectDB = (uri) => {
    console.log("Database Successfully Connected")
    return mongoose.connect(uri ,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};


module.exports = connectDB;