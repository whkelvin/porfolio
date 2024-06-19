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
		<a href="/posts/{post.slug}" class="no-underline">
			<div class="grid grid-cols-1 gaps-1 md:grid-cols-5 my-2 bg-base bg-base-100 rounded-xl">
				<img
					alt="a figure for the given post"
					class="m-0 w-full h-40 md:h-full object-cover rounded-t-xl rounded-b-none md:rounded-l-xl md:rounded-r-none md:col-span-2"
					src={post.feature_image}
					loading="lazy"
				/>

				<div class="md:flex-grow p-2 flex flex-col md:col-span-3">
					<div class="w-full">
						<a class="text-xl font-bold" href="/posts/{post.slug}">{clipText(post.title, 60)}</a>
					</div>
					<div class="w-full">{clipText(post.excerpt, 50)}</div>
				</div>
			</div>
		</a>

		<!--
		<div class="w-full bg-base-100 h-80 flex flex-col md:flex-row md:max-h-36 mb-8 rounded-xl">
			<div class="w-full md:w-[200px]">
				<img
					class="m-0 w-full h-40 md:h-full object-cover rounded-t-xl rounded-b-none md:rounded-l-xl md:rounded-r-none"
					src={post.feature_image}
					loading="lazy"
				/>
			</div>
			<div class="md:flex-grow p-2 flex flex-col">
				<div class="w-full">
					<a class="text-xl font-bold" href="/posts/{post.slug}">{clipText(post.title, 80)}</a>
				</div>
				<div class="w-full">{clipText(post.excerpt, 80)}</div>
			</div>
		</div>
        -->
	{/each}
</div>
