"use strict";

const Line = require("./line");

class Rectangle {
	constructor(start, end) {
		this.diagonal = new Line(start, end);
	}

	toString() {
		return `[Rectangle (${this.diagonal.start.x},${this.diagonal.start.y}) to (${this.diagonal.end.x},${this.diagonal.end.y})]`;
	}

	get area() {
		const length = this.diagonal.end.x - this.diagonal.start.x;
		const breadth = this.diagonal.end.y - this.diagonal.start.y;

		return Math.abs(length * breadth);
	}
}

module.exports = Rectangle;
