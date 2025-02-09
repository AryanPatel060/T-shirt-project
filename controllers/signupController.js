const User = require('../models/User');
const { setUser } = require('../service/auth');

// Render signup page
exports.handlegetsignup = (req, res) => {
    res.render("signup");
};

// Signup function
exports.handlesignup = async (req, res) => {
    const usersignupdata = req.body['usersignup'];
    console.log(usersignupdata);
    delete usersignupdata.cpassword;
    const newUser = new User(usersignupdata);
    try {
        await newUser.save();
        return res.redirect("/welcome");
    } catch (error) {
        return res.status(400).json({ message: "Error creating user:".error });
    }
}



