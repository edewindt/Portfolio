<script>
	export let name;
	export let img;
	export let description;
</script>

<div class="card">
	<img src={img} alt="" />
</div>

<style>
	img {
		object-fit: cover;
		height: 100%;
		width: 100%;
	}
</style>
