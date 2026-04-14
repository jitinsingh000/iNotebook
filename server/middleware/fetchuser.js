const jwt = require('jsonwebtoken');
require('dotenv').config();

const fetchuser = (req, res, next) => {
    // Get the user from the jwt token and add id to req object
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).json({ success: false, error: "No token provided" });
    }
    try {
        const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = data.user;
        next();
    }
    catch (err) {
        return res.status(401).json({ success: false, error: "Invalid or expired token" });
    }
}

module.exports = fetchuser;