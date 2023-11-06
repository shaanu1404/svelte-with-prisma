import { fail, redirect } from "@sveltejs/kit";
import { hash } from 'bcrypt'
import db from "$lib/prisma";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    return {}
};

export const actions: Actions = {
    default: async ({ request }) => {
        const data = await request.formData()
        const name = data.get('name')?.toString(),
            email = data.get('email')?.toString(),
            password = data.get('password')?.toString(),
            confirmPassword = data.get('confirm_password')?.toString()

        if (!name || !email || !password || !confirmPassword) {
            return fail(400, { message: 'Invalid data' })
        }

        if (password !== confirmPassword) {
            return fail(400, { message: 'Passwords don\'t match' })
        }

        const psHash = await hash(password, 5)
        await db.user.create({ data: { email, name, password: psHash } })

        throw redirect(302, '/signin')
    }
};