const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    namebook: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
        
    },
    descriptionmore: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    
});

module.exports = mongoose.model('Books', bookSchema);