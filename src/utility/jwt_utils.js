import {jwtVerify, SignJWT} from "jose";

export async function createToken(email,id){
    const secretKey = new TextEncoder().encode(process.env.JWT_SECRET_KEY);
    const Payload={email:email, id:id};
    let token= await new SignJWT(Payload)
        .setProtectedHeader({alg:'HS256'})
        .setIssuedAt()
        .setIssuer(process.env.JWT_ISSUER)
        .setExpirationTime(process.env.JWT_EXPIRATION_TIME)
        .sign(secretKey)
    return token;
}

export async function verifyToken(token){
    const secretKey = new TextEncoder().encode(process.env.JWT_SECRET_KEY);
    const decoded =await jwtVerify(token, secretKey)
    return decoded['payload'];
}