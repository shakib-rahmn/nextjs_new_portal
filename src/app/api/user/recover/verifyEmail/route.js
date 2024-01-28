import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client"
import { SendEmail } from "@/utility/email_utils";

export async function GET(req){
    try {
        const prisma=new PrismaClient();
        let {searchParams} = new URL(req.url);
        let email = searchParams.get('email');

        const count = await prisma.users.count({where:{email:email}});

        if(count===1){
            let code=Math.floor(100000+Math.random()*900000);
            let EmailText=`Your OTP Code is: ${code}`
            let EmailSubject="Next News Verification Code";
            await SendEmail(email,EmailText,EmailSubject);

            await prisma.users.update({
                where:{email:email},
                data:{otp:code.toString()}
            })
            return  NextResponse.json({status:"success", data: "Check email for 6 digit OTP code"})
        } else {
            return  NextResponse.json({status:"fail", data: "User Not Found", count})
        }
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e})
    }
}