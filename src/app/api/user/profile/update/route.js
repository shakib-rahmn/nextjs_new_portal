import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client"
import {headers} from "next/headers";

export async function POST(req) {
    try{
        let headerList = headers();
        let id = parseInt(headerList.get('id'));
        let reqBody = await req.json();
        const prisma = new PrismaClient();
        const result = await prisma.users.update({
            where:{id:id},
            data:reqBody
        })
        return  NextResponse.json({status:"success",data:result})
    }
    catch (error) {
        return  NextResponse.json({status:"fail",data:error})
    }
}