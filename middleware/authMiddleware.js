const { getUser } = require("../service/auth")
const jwt = require("jsonwebtoken")
const Secretkey = process.env.JWT_SECRET;

async function restrictTologedinUser(req, res, next) {

    const token = req.cookies?.uid;
    if (!token) {
        return res.redirect("/login");
    }
    try {
        const user = getUser(token);
        const role = user.role;
        req.user = user;
        console.log(role);
        if (role == "user") {
            console.log("redirecting to user")
            return res.redirect('/user');
        }
        else if(role == "designer"){
            return res.redirect('/designer');
        }
        next();
    } catch (error) {
        return res.redirect("/login");
    }

}

async function checkAuth(req, res, next) {

    const token = req.cookies?.uid;
    const user = getUser(token);
    req.user = user;
    // console.log(user)
    next();
}


module.exports = {
    restrictTologedinUser,
    checkAuth,
}