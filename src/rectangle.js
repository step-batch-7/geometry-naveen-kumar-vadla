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
		const thisDiagonal = new Line(this.vertexA, this.vertexC);
		const diagonal1 = new Line(otherRectangle.vertexA, otherRectangle.vertexC);
		const diagonal2 = new Line(otherRectangle.vertexB, otherRectangle.vertexD);
		return (
			thisDiagonal.isEqualTo(diagonal1) || thisDiagonal.isEqualTo(diagonal2)
		);
	}

	hasPoint(otherPoint) {
		if (!(otherPoint instanceof Point)) return false;
		const AB = new Line(this.vertexA, this.vertexB);
		const BC = new Line(this.vertexB, this.vertexC);
		const CD = new Line(this.vertexC, this.vertexD);
		const DA = new Line(this.vertexD, this.vertexA);

		return (
			otherPoint.isOn(AB) ||
			otherPoint.isOn(BC) ||
			otherPoint.isOn(CD) ||
			otherPoint.isOn(DA)
		);
	}

	covers(otherPoint) {
		if (!(otherPoint instanceof Point)) return false;
		const [xMin, xMax] = [this.vertexA.x, this.vertexC.x].sort((a, b) => a - b);
		const [yMin, yMax] = [this.vertexA.y, this.vertexC.y].sort((a, b) => a - b);
		return (
			otherPoint.x > xMin &&
			otherPoint.x < xMax &&
			otherPoint.y > yMin &&
			otherPoint.y < yMax
		);
	}
}

module.exports = Rectangle;
