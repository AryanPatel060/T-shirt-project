const mongoose = require('mongoose');

const DesignerSchema = new mongoose.Schema({
    designer_name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email:{
        type:String,
        required : true,
        unique : true
    }
},{ timestamps: true });

module.exports = mongoose.model('Designer', DesignerSchema);