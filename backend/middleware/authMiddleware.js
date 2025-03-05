const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    // Extract token from Authorization header
    const token = req.header("Authorization")?.split(" ")[1]; // Split if you have "Bearer token"

    if (!token) {
        return res.status(401).json({ message: "Access Denied: No token provided" });
    }

    // Validate token
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        console.error("Token verification error:", error.message);
        return res.status(400).json({ message: "Invalid token" });
    }
};

module.exports = authMiddleware;