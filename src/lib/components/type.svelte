<script>
	let y;
	let m = 'n';
	let phrase = [
		'Designer            ',
		'Programmer            ',
		'Artist            ',
		'Visionary            '
	];
	let typedChar = '';
	let index = 0;
	let ind = 0;
	let typewriter;
	const type = () => {
		if (ind < phrase[index].length) {
			typedChar += phrase[index][ind];
			ind++;
			switch (phrase[index][0]) {
				case 'A':
				case 'E':
				case 'I':
				case 'U':
				case 'O':
					m = 'n';
					break;
				default:
					m = '';
					break;
			}
		} else if (index < phrase.length - 1) {
			ind = 0;
			index++;
			typedChar = '';
		} else {
			index = 0;
			ind = 0;
			typedChar = '';
		}
	};
	const typing = () => (typewriter = setInterval(type, 150));

	typing();

	const stop = () => {
		clearInterval(typewriter);
	};
</script>

<p>I'm a{m} <span>{typedChar}</span></p>

<style>
	span {
		color: rgb(65, 255, 211);
		transition: 0.3s;
		cursor: pointer;
	}
	/* span:hover {
		color: rgb(215, 215, 215);
	} */
	p {
		text-align: center;
	}
</style>