import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";

export async function GET(req) {
    try{
        let {searchParams} = new URL(req.url);
        let catID = parseInt(searchParams.get('catID'));
        const prisma = new PrismaClient();
        const result = await prisma.news_list.findMany({where:{catID:catID},})
        return NextResponse.json({status:"success", data:result})
    }
    catch (error) {
        return  NextResponse.json({status:"fail", data: error})
    }
}