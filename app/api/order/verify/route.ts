import { connectDB } from "@/lib/db";
import { AuthError, getAuthUser } from "@/lib/getAuthUser";
import Cart from "@/models/Cart.model";
import Order from "@/models/Order.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const user = await getAuthUser(request)
        const { orderId } = await request.json()

        await connectDB()

        await Order.findOneAndUpdate(
            { _id: orderId, user: user._id },
            { paymentStatus: "paid" }
        )

        await Cart.findOneAndUpdate(
            { user: user._id },
            { $set: { items: [] } }
        )

        return NextResponse.json({ message: "Payment verified" }, { status: 200 })

    } catch (error) {
        if (error instanceof AuthError) {
            return NextResponse.json({ message: error.message }, { status: error.status })
        }
        return NextResponse.json({ message: "Verification failed" }, { status: 500 })
    }
}
