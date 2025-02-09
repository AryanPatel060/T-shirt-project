const mongoose = require("mongoose");

const DesignSchema = new mongoose.Schema({
    design_name:{
        type:String,
        required :true,
    },
    image:{
        type:String,
        required:true,
    },
    printing_price:{
        type:Number,
        required:true,
    },
    designer_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Designer"
    }
},{ timestamps: true });

module.exports = mongoose.model('Design',DesignSchema);