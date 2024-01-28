import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";

export async function GET(req, res) {
    try{
        const prisma = new PrismaClient();
        const result = await prisma.news_list.findMany({
            take:40,
        })
        return NextResponse.json({status:"success", data:result});
    }
    catch (error) {
        return  NextResponse.json({status:"failed",data: error});
    }
}