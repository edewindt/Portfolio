<script>
	import { slide } from 'svelte/transition';
	export let i;
	export let img;
	console.log(i);
</script>

<div class="card">
	<img src={img} alt="" transition:slide={{ delay: i * 300, duration: 300 }} />
</div>

<style>
	img {
		object-fit: cover;
		height: 100%;
		width: 100%;
	}
</style>
