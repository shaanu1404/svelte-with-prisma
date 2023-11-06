import { error } from '@sveltejs/kit'
import type { PageServerLoad } from "./$types";
import db from '$lib/prisma';

export const load: PageServerLoad = async ({ params }) => {
    try {
        const post = await db.post.findUnique({
            where: { id: +params.id }
        })
        if (!post) throw new Error()
        return { post }
    } catch (err) {
        throw error(404, 'Post not found')
    }
};