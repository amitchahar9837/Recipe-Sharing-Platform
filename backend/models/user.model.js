import mongoose from "mongoose";
import { ObjectId } from 'mongoose.schema.types';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profilePic:{
        type: String,
        default: "https://t4.ftcdn.net/jpg/09/17/12/23/240_F_917122367_kSpdpRJ5Hcmn0s4WMdJbSZpl7NRzwupU.jpg"
    },
    recipe:{
        type: ObjectId,
        ref:'recipe'
    }
},{
    timestamps: true
})

const User = mongoose.model("user", userSchema)
export default User