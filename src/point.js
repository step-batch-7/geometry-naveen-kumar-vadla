"use strict";

const arePointsEqual = (point1, point2) => {
	const areXCoordinatesEqual = point1.x == point2.x;
	const areYCoordinatesEqual = point1.y == point2.y;
	return areXCoordinatesEqual && areYCoordinatesEqual;
};

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

	findPointFromStart(distance) {}
}

module.exports = { Point };
