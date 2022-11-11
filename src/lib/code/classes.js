export default class Sprite {
	constructor({ position, velocity, image }) {
		this.position = position;
		this.image = image;
	}
	draw() {
		c.drawImage(this.image, -475, -350);
	}
}
