<script>
	let pr = '/normal-ui';
	let nav = [
		{ url: pr, name: 'Home' },
		{ url: pr + '/contact', name: 'Contact' },
		{ url: pr + '/design', name: 'Design' },
		{ url: pr + '/projects', name: 'Projects' },
		{ url: pr + '/resume', name: 'Resume' }
	];
</script>

<nav>
	<ul>
		{#each nav as { url, name }}
			<li><a href={url}>{name}</a></li>
		{/each}
	</ul>
</nav>

<style>
	nav {
		width: 100%;
		display: flex;
		justify-content: center;
	}
	ul {
		display: flex;
		justify-content: space-between;
	}
</style>
