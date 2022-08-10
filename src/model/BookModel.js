const mongoose = require('mongoose');
const url ="mongodb+srv://manojkumar:manoj123@cluster0.qcrnj2y.mongodb.net/libray"
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }); // part 2
//mongoose.connect('mongodb://localhost:27017/Library');
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;