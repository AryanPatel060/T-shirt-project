const { verifyToken } = require('../service/auth');

// Handle user logout
exports.handleLogout = (req, res) => {
    res.clearCookie('uid'); // Clear the JWT cookie
    res.redirect('/login'); // Redirect to login page
};
