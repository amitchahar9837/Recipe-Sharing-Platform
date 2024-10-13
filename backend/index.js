import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 3000

dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use((err, req,res,next) =>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('DB Connection Successfull!'))
    .catch((err) => {
        console.log(err);
    });

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}!`);
});