import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client"

export async function POST(req) {
    try {
        let reqBody = await req.json();
        const prisma = new PrismaClient();
        const result = await prisma.subscribers.create({ data: reqBody })
        return NextResponse.json({ status:"success", data: result })
    }
    catch (error) {
        return  NextResponse.json({ status:"failed",data: error })
    }
}