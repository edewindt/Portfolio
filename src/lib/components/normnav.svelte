<script>
	import { slide } from 'svelte/transition';
	let pr = '/normal-ui';
	let nav = [
		{ url: pr + '/contact', name: 'Contact' },
		{ url: pr + '/design', name: 'Design' },
		{ url: pr + '/projects', name: 'Projects' },
		{ url: pr + '/resume', name: 'Resume' }
	];
	let navclicked = false;
	const navclick = () => {
		navclicked = !navclicked;
	};
</script>

<nav>
	<ul>
		<button class="nav" on:click={navclick}>
			<svg
				width="24"
				height="24"
				xmlns="http://www.w3.org/2000/svg"
				fill-rule="evenodd"
				clip-rule="evenodd"
				><path d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z" fill="#1040e2" /><path
					d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z"
				/></svg
			>
		</button>
		<a id="headlink" href="/normal-ui">
			<h1 id="header">Elias De Windt</h1>
		</a>
		<div class="links">
			{#each nav as { url, name }}
				<li><a href={url}>{name}</a></li>
			{/each}
		</div>

		<button class="darkmode">
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
				><path
					d="M17 12c0 2.762-2.238 5-5 5s-5-2.238-5-5 2.238-5 5-5 5 2.238 5 5zm-9.184-5.599l-3.594-3.594-1.414 1.414 3.594 3.595c.402-.537.878-1.013 1.414-1.415zm4.184-1.401c.34 0 .672.033 1 .08v-5.08h-2v5.08c.328-.047.66-.08 1-.08zm5.598 2.815l3.594-3.595-1.414-1.414-3.594 3.595c.536.402 1.012.878 1.414 1.414zm-12.598 4.185c0-.34.033-.672.08-1h-5.08v2h5.08c-.047-.328-.08-.66-.08-1zm11.185 5.598l3.594 3.593 1.415-1.414-3.594-3.594c-.403.537-.879 1.013-1.415 1.415zm-9.784-1.414l-3.593 3.593 1.414 1.414 3.593-3.593c-.536-.402-1.011-.877-1.414-1.414zm12.519-5.184c.047.328.08.66.08 1s-.033.672-.08 1h5.08v-2h-5.08zm-6.92 8c-.34 0-.672-.033-1-.08v5.08h2v-5.08c-.328.047-.66.08-1 .08z"
				/></svg
			>
		</button>
	</ul>
</nav>
{#if navclicked}
	<nav class="side" transition:slide>
		<ul class="show">
			<li class="nav-item"><button class="close" on:click={navclick}>Close</button></li>
			{#each nav as { url, name }}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<li class="nav-item" on:click={navclick}><a href={url}>{name}</a></li>
			{/each}
		</ul>
	</nav>
{/if}

<style>
	#headlink {
		display: flex;
		justify-content: center;
		align-items: center;
		flex: 0.6;
		width: 100%;
	}
	#header {
		color: var(--light);
		padding-left: 2rem;
	}
	.nav {
		background: transparent;
		border: none;
		display: none;
	}
	.nav svg {
		fill: var(--light);
		padding: 1rem;
		cursor: pointer;
	}
	.darkmode {
		background: transparent;
		border: none;
	}
	.darkmode svg {
		fill: var(--light);
		padding: 1rem;
		cursor: pointer;
	}
	nav {
		width: 100%;
		display: flex;
		justify-content: center;
		position: fixed;
		background-color: black;
		z-index: 3;
	}
	ul {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}
	.links {
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 50rem;
		height: 4rem;
	}
	a {
		color: var(--light);
		font-size: 1.25rem;
		transition: 0.4s;
	}
	a:hover {
		opacity: 0.6;
	}
	@media only screen and (max-width: 1100px) {
		.links {
			display: none;
		}
		#header {
			padding-left: 0;
			font-size: 2rem;
		}
		.nav {
			display: block;
		}
		.nav svg {
			fill: var(--light);
			padding: 1rem;
			cursor: pointer;
		}
	}
	@media only screen and (max-width: 575px) {
		#header {
			font-size: calc(1 * 5vw);
		}
	}
	.side {
		width: 15rem;
		height: 100vh;
		background-color: var(--dark);
	}
	.show {
		display: flex;
		padding: 0;
		margin: 0;
		width: 100%;
		flex-direction: column;
		align-items: center;
		justify-content: start;
	}
	.nav-item {
		height: 3.5rem;
		display: flex;
		align-items: center;
		transition: 0.4s;
	}
	.close {
		background: transparent;
		color: var(--light);
		font-family: 'Courier New', Courier, monospace;
		border: none;
		font-size: 1.25rem;
		cursor: pointer;
	}
	.nav-item:hover {
		opacity: 0.6;
	}
</style>
