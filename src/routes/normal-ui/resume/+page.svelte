<script>
	import hero from '$lib/assets/space.jpg';
</script>

<div
	class="cont"
	style="  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url({hero});"
>
	<div class="inner">
		<h2 class="hero-text">Resume</h2>
		<section class="sec">
			<h3>Profile</h3>
			<p>
				I like to defy people's expectations, and learn everything I can about anything I'm
				interested in. I have an extreme passion for Art and Programming.
			</p>
		</section>
		<section class="sec">
			<h3>Skills and Abilities</h3>
			<ul>
				<li>Bilangual (Spanish & English)</li>
				<li>
					Programming (HTML, CSS, JavaScript, Java, C/C++, Python, Go, GraphQL, NodeJS, Express,
					CoffeeScript, TypeScript, SQL, MySQL, PostreSQL, MongoDB)
				</li>
				<li>Accessibility</li>
				<li>Responsive Design</li>
				<li>Graphic Design and Art</li>
				<li>
					Search Engine Optimization (Robots.txt, Sitemap.xml, Meta Tags, Canonicals, Open Graph
					API, On-Page SEO, Off-page SEO)
				</li>
				<li>Marketing (Funnels, Customer Journey Mapping, Branding, Competitive Analysis)</li>
			</ul>
		</section>
		<section class="sec">
			<h3>Education</h3>
			<li>HIGH SCHOOL DIPLOMA: JUNE 1, 2021 - RUFUS KING HIGH SCHOOL</li>
			<li>UNIVERSITY OF MADISON - DIGITAL MARKETING CERTIFICATE: MAY 2021 - JANUARY 2022</li>
		</section>
	</div>
</div>

<style>
	.sec {
		background-color: rgba(0, 0, 0, 0.678);
		border: 1px solid var(--light);
		border-radius: 7px;
		padding: 1rem;
		font-size: 1.3rem;
		margin: 2rem;
		color: var(--light);
	}
	.cont {
		height: fit-content;
		min-height: 100vh;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		overflow: hidden;
		background-attachment: fixed;
	}
	.inner {
		display: grid;
		max-width: 50rem;
		width: 100vw;
	}
	.hero-text {
		color: white;
		font-size: 4rem;
		text-align: center;
	}
	h3 {
		text-align: center;
	}
	p {
		margin: 1rem;
	}
	li {
		position: relative;
		left: 2rem;
		margin: 1rem;
	}
</style>
