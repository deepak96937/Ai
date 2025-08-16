import jwt from 'jsonwebtoken';

const genToken = (userId) => {
    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET is not defined in environment variables");
    }

    try {
        return jwt.sign(
            { userId },
            process.env.JWT_SECRET,
            { expiresIn: '10d' }
        );
    } catch (error) {
        console.error("Error generating token:", error.message);
        throw new Error("Token generation failed");
    }
};

export default genToken;
