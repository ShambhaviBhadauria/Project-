import { NextResponse } from 'next';
import submissionModel from "@/app/models/sub"; 
import connectDB from "@/app/lib/mongodb";
import mongoose from "mongoose";

export async function POST(req) {
    try {
        await connectDB(); 
        const { title, authorname, yearOfPublication, volume, extraInformation, responseEmail } = await req.json();

        const newSubmission = await submissionModel.create({
            title,
            authorname,
            yearOfPublication,
            volume,
            extraInformation,
            responseEmail
        });

        return NextResponse.json({
            msg: ["Send Successfully!"],
            success: true,
            submission: newSubmission
        });
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
          
            const errorList = Object.values(error.errors).map(e => e.message);
            return NextResponse.json({ msg: errorList });
        } else {
         
            console.error("Error creating submission:", error);
            return NextResponse.error();
        }
    }
}
