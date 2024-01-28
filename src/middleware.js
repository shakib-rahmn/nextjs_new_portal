import {NextResponse} from "next/server";
import { verifyToken } from "./utility/jwt_utils";
export async function middleware(req){
    try {
        let token = req.cookies.get('token');
        let payload = await verifyToken(token['value'])
        const requestHeader = new Headers(req.headers);
        requestHeader.set('email', payload['email'])
        requestHeader.set('id', payload['id'])
        return NextResponse.next({request:{headers:requestHeader}})

    }catch (error) {
        if(req.nextUrl.pathname.startsWith("/api/")){
            return NextResponse.json({status:'fail', data:'Unauthorized'}, {status:401});
        }
        else {
            return NextResponse.redirect(new URL('/user/login', req.url))
        }
    }
}

export const config={
    matcher:[
        '/user',
        '/profile',
        '/comments',
        '/api/comments/manage',
        '/api/user/profile/details',
        '/api/user/profile/update',
    ]
}
