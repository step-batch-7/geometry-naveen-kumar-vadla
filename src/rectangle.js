"use strict";

const Line = require("./line");
const Point = require("./point");

class Rectangle {
	constructor(start, end) {
		this.vertexA = new Point(start.x, start.y);
		this.vertexC = new Point(end.x, end.y);
		this.vertexB = new Point(end.x, start.y);
		this.vertexD = new Point(start.x, end.y);
	}

	toString() {
		return `[Rectangle (${this.vertexA.x},${this.vertexA.y}) to (${this.vertexC.x},${this.vertexC.y})]`;
	}

	get area() {
		return (
			this.vertexA.findDistanceTo(this.vertexB) *
			this.vertexB.findDistanceTo(this.vertexC)
		);
	}

	get perimeter() {
		return (
			2 *
			(this.vertexA.findDistanceTo(this.vertexB) +
				this.vertexB.findDistanceTo(this.vertexC))
		);
	}

	isEqualTo(otherRectangle) {
		if (!(otherRectangle instanceof Rectangle)) return false;
		return (
			this.vertexA.isEqualTo(otherRectangle.vertexA) &&
			this.vertexB.isEqualTo(otherRectangle.vertexB) &&
			this.vertexC.isEqualTo(otherRectangle.vertexC) &&
			this.vertexD.isEqualTo(otherRectangle.vertexD)
		);
	}
}

module.exports = Rectangle;
