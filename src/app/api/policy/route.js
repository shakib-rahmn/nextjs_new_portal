import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client"

export async function GET(req) {
    try {
        const prisma = new PrismaClient();
        let {searchParams} = new URL(req.url);
        let type = searchParams.get('type');
        console.log(type);
        const result = await prisma.policies.findMany({ where: {type:type} });
        return NextResponse.json({status:"success", data:result});
    }
    catch (error) {
        return  NextResponse.json({status:"failed", data: error})
    }
}