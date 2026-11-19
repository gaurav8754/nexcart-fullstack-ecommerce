import { getAuthUser } from "@/lib/getAuthUser";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
    try {

        const user = await getAuthUser(request)

        return NextResponse.json({ user }, { status: 200 })

    } catch (err) {
        console.log(err)
        const message = err instanceof Error ? err.message : "Internal Server Error"
        return NextResponse.json({ message: "Internal Server Error", error: message }, { status: 500 })

    }
}