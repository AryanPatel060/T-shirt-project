const User = require('../models/User');
const { setUser } = require('../service/auth'); // Import generateToken
const bcrypt = require("bcrypt");

async function handleGetLogin(req, res) {
    if (req.user) {
        return res.redirect("/")
    }
    return res.render("login")
}

async function handleLogin(req, res) {
    const loginData = req.body['login'];
    const email = loginData['email'];
    const user = await User.findOne({email});
    if (!user || !bcrypt.compare( loginData['password'],user.password)) {
        return res.status(401).json({ message: "Invalid email or password" });
    }
    // making session and making record of it
    // const sessionid = uuidv4();
    const token =setUser(user)
    // cookie creation of sessionid
    res.cookie('uid' , token ,{
        httpOnly : true,
        secure: true, // Ensure HTTPS in production
        sameSite: "Strict",
    })

    return res.redirect("/")
}


module.exports = {
    handleGetLogin,
    handleLogin
}
