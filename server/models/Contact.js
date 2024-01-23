const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    fullname: {
        type: String,
        require: true,
    },
    fulltext: {
        type: String,
        require: true,
    },
  
    
});

module.exports = mongoose.model('Contact', contactSchema);