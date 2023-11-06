import { JWT_SECRET_KEY } from "$env/static/private";
import db from "$lib/prisma";
import jwt, { type JwtPayload } from 'jsonwebtoken'

export function signUserToken(payload: any) {
    return jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: '2d', })
}

export async function decodeUserFromToken(token: string) {
    const decoded = jwt.decode(token) as JwtPayload
    const user = await db.user.findUnique({
        where: { id: decoded?.id },
        select: { id: true, email: true, name: true, }
    })
    return user;
}