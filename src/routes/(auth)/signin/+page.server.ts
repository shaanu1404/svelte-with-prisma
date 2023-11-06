import { fail, redirect } from "@sveltejs/kit";
import { compare } from 'bcrypt'
import moment from 'moment'
import db from "$lib/prisma";
import { signUserToken } from "$lib/utils/users";
import type { Actions, PageServerLoad } from "./$types";
import { USER_COOKIE_KEY } from "$lib/utils/constants";

export const load: PageServerLoad = async () => {
    return {}
};

export const actions: Actions = {
    default: async ({ request, cookies }) => {
        const data = await request.formData()
        const email = data.get('email')?.toString(), password = data.get('password')?.toString()

        if (!email || !password) {
            return fail(400, { message: 'Invalid credentials' })
        }

        const user = await db.user.findUnique({ where: { email } })
        if (!user) {
            return fail(400, { message: 'Invalid credentials' })
        }
        const isMatch = await compare(password, user.password!)
        if (!isMatch) {
            return fail(400, { message: 'Invalid credentials' })
        }

        const token = signUserToken({ id: user.id, email: user.email })

        const expirationDate = moment().add(2, 'days').toDate()
        cookies.set(USER_COOKIE_KEY, token, { httpOnly: true, expires: expirationDate })

        throw redirect(302, '/')
    }
};