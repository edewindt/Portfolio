<script>
	export let name;
	export let img;
	export let description;
</script>

<div class="card">
	<h1>{name}</h1>
	<img src={img} alt="" />
	<p>{description}</p>
</div>
