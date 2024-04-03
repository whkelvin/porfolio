<script lang="ts">
	import { NAVS } from '$lib/constants';
	import '../../app.css';
</script>

<div class="drawer">
	<input id="my-drawer" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
		<header class="navbar bg-base-300 fixed opacity-90 z-10">
			<div class="flex-none">
				<label for="my-drawer" class="btn drawer-button btn-square btn-ghost">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block w-5 h-5 stroke-current"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						></path></svg
					>
				</label>
			</div>
			<div class="flex-1">
				<a class="btn btn-ghost text-xl" href="/">Kelvin Hsu</a>
			</div>
		</header>
		<div class="w-screen bg-base-200 dot-bg pt-20 lg:pt-32 pb-10">
			<div
				class="min-h-[800px] w-11/12 lg:w-3/5 px-4 max-w-screen-lg bg-base-300 m-auto rounded-lg opacity-80"
			>
				<div class="prose m-auto py-20 lg:py-36">
					<slot />
				</div>
			</div>
		</div>
		<footer class="footer footer-center p-4 bg-base-300 text-base-content opacity-90">
			<aside>
				<p>Copyright © 2024</p>
			</aside>
		</footer>
	</div>
	<div class="drawer-side z-50">
		<label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
			{#each NAVS as { title, url }}
				<li>
					<a href={url} class="font-ubuntu font-bold hover:text-info py-1">
						{title}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	.dot-bg {
		background-image: url('/assets/dot-bg.svg');
		background-repeat: repeat;
	}
</style>
