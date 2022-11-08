<script>
	import { fly } from 'svelte/transition';
	export let i;
	export let img;
</script>

<div class="card">
	<img src={img} alt="" transition:fly={{ delay: i * 100, duration: 300 }} />
</div>

<style>
	img {
		object-fit: cover;
		height: 100%;
		width: 100%;
	}
</style>
