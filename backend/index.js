import express from "express";
import 'dotenv/config';
import connectDB from "./config/db.js";
import authRoute from "./routes/auth.routers.js";
import cookieParser from "cookie-parser";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser()); // ✅ fixed

app.get("/", (req, res) => {
    res.send("hey is working here");
});

app.use("/api/auth", authRoute);

app.listen(port, () => {
    connectDB();
    console.log(`🚀 Server running at http://localhost:${port}`);
});
