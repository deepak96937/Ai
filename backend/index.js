import express from "express";
import 'dotenv/config';
import connectDB from "./config/db.js";
import authRoute from "./routes/auth.routers.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./routes/user.routes.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser()); // ✅ fixed
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.get("/", (req, res) => {
    res.send("hey is working here");
});

app.use("/api/auth", authRoute);
app.use("/api/user", userRouter);

app.listen(port, () => {
    connectDB();
    console.log(`🚀 Server running at http://localhost:${port}`);
});
