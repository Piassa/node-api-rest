const mongoose = require('mongoose');

const SchemaDb = new mongoose.Schema({
    title: {
       type: String,
       required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }

});


mongoose.model('SchemaDb', SchemaDb)