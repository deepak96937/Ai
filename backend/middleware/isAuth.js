import jwt from 'jsonwebtoken';

const isAuth = (req, res, next) => {
    try {
        // Ensure cookie-parser is being used in your app
        console.log(req.cookies);
        const token = req.cookies?.token;
        console.log(token);
        
        
        if (!token) {
            return res.status(401).json({ message: "Unauthorized: No token provided" });
        }

        const verifyToken =jwt.verify(token, process.env.JWT_SECRET);
        req.userId = verifyToken.userId;
        next();
    } catch (error) {
        console.error("JWT verification error:", error.message);
        return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
};

export default isAuth;
