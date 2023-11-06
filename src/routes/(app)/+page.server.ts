import db from '$lib/prisma';
import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ locals }) => {
    try {
        const posts = await db.post.findMany({
            where: { authorId: locals.user.id },
            orderBy: { createdAt: 'desc' },
            include: { author: { select: { name: true } } }
        })
        return { posts }
    } catch (err: any) {
        throw error(404, err.message)
    }
};