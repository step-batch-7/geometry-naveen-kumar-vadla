"use strict";

const { arePointsEqual } = require("./utilities");

class Point {
	constructor(x, y) {
		[this.x, this.y] = [x, y];
	}
}

module.exports = Point;
