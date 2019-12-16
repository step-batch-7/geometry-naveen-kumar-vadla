"use strict";

class Point {
	constructor(x, y) {
		[this.x, this.y] = [x, y];
	}

	toString() {
		return `[Point @(${this.x},${this.y})]`;
	}

	isEqualTo(otherPoint) {
		return (
			otherPoint instanceof Point &&
			this.x == otherPoint.x &&
			this.y == otherPoint.y
		);
	}

	visit(action) {
		return action(this.x, this.y);
	}

	clone() {
		return new Point(this.x, this.y);
	}

	findDistanceTo(otherPoint) {
		if (!(otherPoint instanceof Point)) return NaN;

		const diffOfYPoints = otherPoint.y - this.y;
		const diffOfXPoints = otherPoint.x - this.x;
		const distance = diffOfXPoints ** 2 + diffOfYPoints ** 2;
		return Math.sqrt(distance);
	}

	isOn(shape) {
		return shape.hasPoint(this);
	}
}

module.exports = { Point };
