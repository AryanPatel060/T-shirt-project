const jwt = require('jsonwebtoken');
const key = process.env.JWT_SECRET;

const sessionidtousermap = new Map()

function setUser(user) {
    const payload = {
        _id: user._id,
        emial: user.email,
        role:user.role
    }
    return jwt.sign(payload, key, {
        expiresIn: "1d",
    })

    // sessionidtousermap.set(id,user)
}

function getUser(token) {
    if (!token) return null;
    // console.log("getuser" , token)
    return jwt.verify(token, key);
    // return sessionidtousermap.get(id);
}

function getRole(token) {
    if (!token) return null;
    const decoded = jwt.verify(token, key);
   
    return decoded.role;
}
function removeUser(id) {
    return sessionidtousermap.delete(id);
}


module.exports = {
    setUser,
    getUser,
    removeUser,
}

