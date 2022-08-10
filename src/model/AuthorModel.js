const mongoose = require('mongoose');
const url ="mongodb+srv://manojkumar:manoj123@cluster0.qcrnj2y.mongodb.net/libray"
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }); // part 2
// mongoose.connect('mongodb://localhost:27017/Library');
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;