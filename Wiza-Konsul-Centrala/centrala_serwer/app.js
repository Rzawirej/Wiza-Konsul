const mongoose = require("mongoose");
const Fawn = require("fawn");
Fawn.init(mongoose);

const dburl = "mongodb+srv://admin:admin@centrala-gb7a4.mongodb.net/Centrala?retryWrites=true&w=majority";
mongoose.connect(dburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
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

var sprawySchema = new mongoose.Schema({
    Imie: String,
    Nazwisko: String,
}, {
    collection: 'Sprawy'
});
var Sprawy = mongoose.model('Sprawy', sprawySchema);

var s1 = new Sprawy({
    Imie: 'Pioterek',
    Nazwisko: 'Piotrowski'

});
s1.save(function (err, sprawa) {
    if (err) return console.error(err);
});

Sprawy.find(function (err, sprawa) {
    if (err) return console.error(err);
    console.log(sprawa);
})