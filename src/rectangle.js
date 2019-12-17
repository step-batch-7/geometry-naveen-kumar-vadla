"use strict";

const Line = require("./line");

const getSides = diagonal => {
	const { start, end } = diagonal;
	const AB = new Line(start, { x: end.x, y: start.y });
	const DA = new Line(start, { x: start.x, y: end.y });
	const BC = new Line(end, { x: end.x, y: start.y });
	const CD = new Line(end, { x: start.x, y: end.y });
	return { AB: AB, BC: BC, CD: CD, DA: DA };
};

class Rectangle {
	constructor(start, end) {
		this.diagonal = new Line(start, end);
	}

	toString() {
		return `[Rectangle (${this.diagonal.start.x},${this.diagonal.start.y}) to (${this.diagonal.end.x},${this.diagonal.end.y})]`;
	}

	get area() {
		const { AB, BC } = getSides(this.diagonal);
		return AB.length * BC.length;
	}
}

module.exports = Rectangle;
