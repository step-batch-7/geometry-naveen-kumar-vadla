"use strict";

const { arePointsEqual } = require("./utilities");

class Point {
	constructor(x, y) {
		[this.x, this.y] = [x, y];
	}

	toString() {
		return `[Point @(${this.x},${this.y})]`;
	}

	isEqualTo(otherPoint) {
		return otherPoint instanceof Point && arePointsEqual(this, otherPoint);
	}

	visit(action) {
		return action(this.x, this.y);
	}

	clone() {
		return new Point(this.x, this.y);
	}
}

module.exports = Point;
