<script lang="ts">
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	export let data: PageData;

	onMount(() => {
		console.log(data.content);
	});
</script>

<div class="m-auto prose">
	<h1>{data.content.title}</h1>
	{@html data.content.html}
</div>
