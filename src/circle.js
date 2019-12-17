"use strict";

const Point = require("./point");

class Circle {
	constructor(center, radius) {
		this.center = new Point(center.x, center.y);
		this.radius = radius;
	}

	toString() {
		return `[Circle @(${this.center.x},${this.center.y}) radius ${this.radius}]`;
	}

	get area() {
		return Math.PI * this.radius ** 2;
	}

	get perimeter() {
		return 2 * Math.PI * this.radius;
	}

	isEqualTo(otherCircle) {
		if (!(otherCircle instanceof Circle)) return false;
		return (
			this.center.isEqualTo(otherCircle.center) &&
			this.radius == otherCircle.radius
		);
	}

	hasPoint(otherPoint) {
		if (!(otherPoint instanceof Point)) return false;
		return this.center.findDistanceTo(otherPoint) == this.radius;
	}

	moveTo(newPosition) {
		return new Circle(newPosition, this.radius);
	}
}

module.exports = Circle;
