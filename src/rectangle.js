"use strict";

const Line = require("./line");
const Point = require("./point");

class Rectangle {
	constructor(start, end) {
		this.A = new Point(start.x, start.y);
		this.C = new Point(end.x, end.y);
		this.B = new Point(end.x, start.y);
		this.D = new Point(start.x, end.y);
	}

	toString() {
		return `[Rectangle (${this.A.x},${this.A.y}) to (${this.C.x},${this.C.y})]`;
	}

	get area() {
		return this.A.findDistanceTo(this.B) * this.B.findDistanceTo(this.C);
	}

	get perimeter() {
		return 2 * (this.A.findDistanceTo(this.B) + this.B.findDistanceTo(this.C));
	}
}

module.exports = Rectangle;
