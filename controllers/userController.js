const User = require('../models/User');
const { handlesignup } = require('./signupController');

// Signup function
signup = async (req, res) => {
    const { username, password } = req.body;
    const newUser = new User({ username, password });
    try {
        await newUser.save();
        res.redirect('/welcome'); // Redirect to welcome page after signup
    } catch (error) {
        res.status(400).send('Error creating user: ' + error.message);
    }
};

// Login function
login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user || user.password !== password) {
            return res.status(401).send('Invalid credentials');
        }
        res.redirect('/welcome'); // Redirect to welcome page after login
    } catch (error) {
        res.status(500).send('Error logging in: ' + error.message);
    }
};

handlegetuser = async (req, res) => {
    res.render('welcome', { user: req.user });
}

module.exports = {
    signup,
    login,
    handlegetuser
}
