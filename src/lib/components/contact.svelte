<section>
	<h1>Contact</h1>

	<div class="contact">
		<div class="paragraphs">
			<p>Thank you for taking the time and energy to contact me.</p>
			<p>To contact me through Social Media use the following links:</p>
			<ul>
				<li><a href="https://www.linkedin.com/in/eliasdewindt/">LinkedIn</a></li>
				<li><a href="https://edewindt.com/contact-me/">My Blog (edewindt.com)</a></li>
			</ul>
			<p>
				For general questions and contact, feel free to email me at <span class="email"
					>elias@edewindt.com</span
				>
			</p>
			<p>
				If you want to work with me on a project, or idea, I would gladly consider working with you.
				To see the full range of skills I posses, visit my Resume page.
			</p>
			<p>
				Please fill out the form and we’ll be in touch. I will attempt to respond in 24 hours or
				less!
			</p>
		</div>

		<form action="">
			<label for="">Name (Required)</label><input type="text" />

			<label for="">Email (Required)</label><input type="text" />

			<label for="">Phone</label><input type="text" />

			<label for="">Message</label><textarea name="" id="" cols="30" rows="10" />

			<button>Submit</button>
		</form>
	</div>
</section>

<style>
	h1 {
		color: white;
		font-size: 2.5rem;
	}
	section {
		display: flex;
		align-items: center;
		flex-direction: column;
		margin: 0rem 2rem;
		padding: 2rem 0rem;
	}
	.contact {
		display: flex;
		align-items: center;
		width: 70rem;
		max-width: 100%;
		background-color: rgba(0, 0, 0, 0.676);
		padding: 4rem;
		color: var(--light);
		padding-bottom: 3.5rem;
		font-size: 20px;
		border-radius: 1rem;
	}
	.contact form {
		display: flex;
		align-items: center;
		flex-direction: column;
	}
	input {
		width: 30rem;
		height: 1.5rem;
		max-width: calc(100vw - 5rem);
		background-color: pink;
		border: none;
		border-radius: 3px;
		padding-left: 0.5rem;
		font-size: 1.25rem;
	}
	label {
		margin-top: 1.7rem;
		margin-bottom: 0.3rem;
		display: flex;
		justify-content: start;
		width: 100%;
	}
	textarea {
		width: 30rem;
		max-width: calc(100vw - 5rem);
		background-color: pink;
		border: none;
		border-radius: 3px;
		padding-left: 0.5rem;
		font-size: 1.25rem;
		height: 8rem;
	}
	.contact p {
		margin: 1rem;
	}
	a {
		color: pink;
	}
	.email {
		color: pink;
	}
	ul {
		position: relative;
		left: 5rem;
	}
	@media only screen and (max-width: 1300px) {
		.contact {
			max-width: calc(100vw - 15rem);
		}
		input {
			width: 20rem;
		}
		textarea {
			width: 20rem;
		}
	}
	@media only screen and (max-width: 900px) {
		.contact {
			display: flex;
			align-items: center;
			width: 40rem;
			max-width: 100%;
			flex-direction: column;
			background-color: var(--dark);
			padding: 1rem;
			color: var(--light);
			overflow: hidden;
		}

		.contact form {
			display: flex;
			align-items: center;
			flex-direction: column;
		}
		input {
			width: 40rem;
			max-width: calc(100vw - 5rem);
		}
		textarea {
			width: 40rem;
			max-width: calc(100vw - 5rem);
		}
	}
	.contact form button {
		padding: 0.5rem 1rem;
		margin-top: 2rem;
		width: 100%;
		border: none;
		border-radius: 5px;
		background-color: rgb(215, 63, 89);
		color: white;
	}
</style>
