import type { PageData, PageServerLoad } from './$types';
import { env } from '$env/dynamic/private';
import GhostContentAPI, { type PostOrPage } from '@tryghost/content-api';

export interface Nav {
  url: string;
  title: string;
}

export const load: PageServerLoad = async ({ params }): Promise<PageData> => {
  const api = new GhostContentAPI({
    url: env.GHOST_URL,
    key: env.GHOST_CONTENT_API_KEY,
    version: 'v5.0'
  });

  const res: PostOrPage = await api.posts.read({ slug: params.slug }, { formats: ['html'] });

  return {
    content: res
  };
};
