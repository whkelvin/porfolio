<script lang="ts">
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	export let data: PageData;
	onMount(() => {
		console.log(data.posts);
	});
	function clipText(str: string, limit: number) {
		if (str.length > limit) {
			return str.substring(0, limit) + ' ...';
		}
		return str;
	}
</script>

<div class="flex flex-col">
	<h1>{data.tag}</h1>
	{#each data.posts as post}
		<div class="w-full bg-base-100 h-72 flex flex-col md:flex-row md:max-h-28 mb-8 rounded-xl">
			<div class="w-full md:w-1/3">
				<img
					class="m-0 w-full h-40 md:h-full object-cover rounded-t-xl rounded-b-none md:rounded-l-xl md:rounded-r-none"
					src={post.feature_image}
					loading="lazy"
				/>
			</div>
			<div class="md:flex-grow p-2 flex flex-col">
				<div>
					<a class="text-xl font-bold" href="/posts/{post.slug}">{clipText(post.title, 25)}</a>
				</div>
				<div>{clipText(post.excerpt, 80)}</div>
			</div>
		</div>
	{/each}
</div>
