const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect("mongodb+srv://MayurWagh:mayur_123@cluster0.47rnh.mongodb.net/projetc_authenctication?retryWrites=true&w=majority");
};