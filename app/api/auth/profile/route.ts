import { verifyToken } from "@/lib/auth";
import { connectDB } from "@/lib/db";
import { getAuthUser } from "@/lib/getAuthUser";
import User from "@/models/User.model";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
    try {

        const user = await getAuthUser(request)

        return NextResponse.json({ user }, { status: 200 })

    } catch (err: any) {
        console.log(err)
        return NextResponse.json({ message: "Internal Server Error", error: err.message }, { status: 500 })

    }
}