"use strict";

const Point = require("./point");

class Circle {
	constructor(center, radius) {
		this.center = new Point(center.x, center.y);
		this.radius = radius;
	}
}

module.exports = Circle;
