import db from "$lib/prisma";
import { fail, redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions: Actions = {
    createpost: async ({ request, locals }) => {
        const userId = locals.user.id
        const { title, content } = Object.fromEntries(await request.formData()) as { title: string; content: string; }
        try {
            const post = await db.post.create({
                data: {
                    title, content, authorId: userId
                }
            })
            return { message: `Successfully created post -> ${post.title}` }
        } catch (error) {
            return fail(400, { error: JSON.stringify(error) })
        }
    }
};