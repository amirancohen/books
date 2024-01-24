const mongoose = require("mongoose");

const recomendationSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    recommendation: {
        type: String,
        require: true,
    },
});

module.exports = mongoose.model("Recommendation", recomendationSchema);
