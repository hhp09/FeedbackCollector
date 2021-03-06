const mongoose = require('mongoose');
const Schema = mongoose.Schema;         

// Use Schema object to create schema that describes what individual record will look like

const userSchema = new Schema ({
    googleId: String,
    credit: { type: Number, default: 0 }
})  

mongoose.model('users', userSchema);    // create new collection called users