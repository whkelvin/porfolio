<script lang="ts">
	import { NAVS } from '$lib/constants';
	import '../app.css';
</script>

<div class="w-screen h-screen flex bg-base-200 dot-bg overflow-hidden text-xl">
	<div
		class="m-auto bg-base-300 py-8 px-8 opacity-90 w-5/6 max-w-[500px] drop-shadow-sm rounded-md"
	>
		<div>
			<div class="prose m-auto py-20 lg:py-36 flex flex-col">
				<h1 class="m-auto text-center p-4">404 Not Found!</h1>
				<a class="text-center m-auto font-bold" href="/">GO HOME</a>
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
