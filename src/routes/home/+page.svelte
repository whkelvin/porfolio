<script lang="ts">
	import { NAVS } from '$lib/constants';
</script>

<div class="w-screen h-screen flex bg-base-200 dot-bg overflow-hidden text-xl">
	<div
		class="m-auto bg-base-300 py-8 px-8 opacity-90 w-5/6 max-w-[500px] drop-shadow-sm rounded-md"
	>
		<div>
			<span class="text-success font-bold pb-4"> wheklvin </span>
			<span class="text-info font-bold">/home</span>
			<span class="font-bold"> $&ensp;ls<br /></span>
			<div class="flex flex-col font-ubuntu pl-4 py-2">
				{#each NAVS as { title, url }}
					<a href={url} class="font-ubuntu font-bold hover:text-info py-1">
						{title}
					</a>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.dot-bg {
		background-image: url('/assets/dot-bg.svg');
		background-repeat: repeat;
	}
</style>
