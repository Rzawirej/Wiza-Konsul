const mongoose = require("mongoose");
const Fawn = require("fawn");
Fawn.init(mongoose);

const dburl = "mongodb+srv://Todo:T8p1QIfTH51PPrFC1Pjk@cluster0-t7gr5.mongodb.net/cinema?retryWrites=true";
mongoose.connect(dburl, {
    useNewUrlParser: true
});
mongoose.connection.on("connected", function () {
    console.log("Mongoose connected to " + dburl);
});
mongoose.connection.on("disconnected", function () {
    console.log("Mongoose disconnected");
});
mongoose.connection.on("error", function (err) {
    console.log("Mongoose connection error " + err);
});