const { default: mongoose } = require("mongoose");

async function connectdb(url)
{
    mongoose.connect(url).then(()=>console.log("Database Connected")).catch((err)=>console.log("Error in databse : ",err))
}

module.exports = connectdb