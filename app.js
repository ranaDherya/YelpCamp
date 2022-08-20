const express = require('express');
const mongoose = require('mongoose');
const Campground = require('./models/campgrounds.js')
const path = require('path');

async function main() {
    await mongoose.connect('mongodb://localhost:27017/yelpcamp');
}

main();

const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => console.log("Database connected"));

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('home');
});
app.get('/makecampground', async(req, res) => {
    const camp = new Campground({ title: 'My backyard', description: 'Cheap camping' });
    await camp.save();
    res.send(camp);
})

app.listen(3000, () => console.log('Listening to PORT-3000.'))