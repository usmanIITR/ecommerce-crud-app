const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
mongoose.connect("mongodb+srv://usman:usman123@cluster0.3mpndho.mongodb.net/?retryWrites=true&w=majority").then(function(){
    app.get('/' , function(req,res) {
        res.send('Ecommerce Setup API');
    });

    const userRoutes = require('./routes/user_routes');
    app.use("/api/user" , userRoutes);
});
const PORT = 5000;

app.listen(PORT , function(){
    console.log(`Server started at post : ${PORT}`);
}); 