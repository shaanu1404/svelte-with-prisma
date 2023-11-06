import { AUTH_ROUTES, LOGIN_URL, USER_COOKIE_KEY } from "$lib/utils/constants";
import { decodeUserFromToken } from "$lib/utils/users";
import { redirect, type Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
    const token = event.cookies.get(USER_COOKIE_KEY)
    if (!token && !AUTH_ROUTES.includes(event.url.pathname)) {
        throw redirect(303, LOGIN_URL)
    }
    if (token) {
        const user = await decodeUserFromToken(token!)
        if (!user) {
            throw redirect(303, LOGIN_URL)
        }
        event.locals.user = user
    }

    return resolve(event)
}