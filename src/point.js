"use strict";

const { arePointsEqual } = require("./utilities");

class Point {
	constructor(x, y) {
		[this.x, this.y] = [x, y];
	}

	toString() {
		return `[Point @(${this.x},${this.y})]`;
	}
}

module.exports = Point;
