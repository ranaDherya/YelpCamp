const mongoose = require('mongoose');
const Campground = require('./models/campgrounds.js')

async function mongooseConnect() {
    await mongoose.connect('mongodb://localhost:27017/yelpcamp');
}

mongooseConnect();

const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => console.log("Database connected"));

const seedDB = async() => {
    await Campground.deleteMany({});
    const c = new Campground
}