import express from "express";
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res)=>{
    res.send("hey is working here")
})

app.listen(port, ()=>{
     console.log(`🚀 Server running at http://localhost:${port}`);
})