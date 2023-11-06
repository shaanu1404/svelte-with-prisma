import { LOGIN_URL, USER_COOKIE_KEY } from "$lib/utils/constants";
import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ cookies }) => {
    cookies.delete(USER_COOKIE_KEY)
    throw redirect(302, LOGIN_URL)
};