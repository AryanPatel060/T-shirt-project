const { verifyToken } = require('../service/auth');

// Handle user logout
handlegetdesigner = (req, res) => {
    
    res.render('designerDashboard', { user: req.user });
};

module.exports = {
    handlegetdesigner,
}