import type { PageData, PageServerLoad } from './$types';
import { GHOST_URL, GHOST_CONTENT_API_KEY } from '$env/static/private';
import GhostContentAPI, { type PostsOrPages, type Tag } from '@tryghost/content-api';

export interface Post {
  url: string;
  title: string;
}

export const load: PageServerLoad = async ({ params }): Promise<PageData> => {
  const api = new GhostContentAPI({
    url: GHOST_URL,
    key: GHOST_CONTENT_API_KEY,
    version: 'v5.0'
  });

  const res: PostsOrPages = await api.posts.browse({
    filter: `tags:[${params.slug}]`
  });

  const posts = res.filter((p) => p.url != null);
  const tag: Tag = await api.tags.read({
    slug: params.slug
  });

  return {
    posts: posts,
    tag: tag.name ?? ''
  };
};
