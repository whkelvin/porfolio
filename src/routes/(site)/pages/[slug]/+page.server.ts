import type { PageData, PageServerLoad } from './$types';
import { GHOST_URL, GHOST_CONTENT_API_KEY } from '$env/static/private';
import GhostContentAPI, { type PostOrPage } from '@tryghost/content-api';

export interface Nav {
	url: string;
	title: string;
}

export const load: PageServerLoad = async ({ params }): Promise<PageData> => {
	const api = new GhostContentAPI({
		url: GHOST_URL,
		key: GHOST_CONTENT_API_KEY,
		version: 'v5.0'
	});

	const res: PostOrPage = await api.pages.read({ slug: params.slug }, { formats: ['html'] });

	return {
		content: res
	};
};
