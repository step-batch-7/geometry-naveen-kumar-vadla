"use strict";

const Point = require("./point");

const isNumberInRange = (range, number) => {
	const lowerLimit = Math.min(...range);
	const upperLimit = Math.max(...range);
	return number >= lowerLimit && number <= upperLimit;
};

const arePointsCollinear = (point1, point2, point3) => {
	const [x1, y1] = [point1.x, point1.y];
	const [x2, y2] = [point2.x, point2.y];
	const [x3, y3] = [point3.x, point3.y];
	return x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2) == 0;
};

class Line {
	constructor(start, end) {
		this.start = new Point(start.x, start.y);
		this.end = new Point(end.x, end.y);
	}

	toString() {
		const startingPoints = `(${this.start.x},${this.start.y})`;
		const endingPoints = `(${this.end.x},${this.end.y})`;
		return `[Line ${startingPoints} to ${endingPoints}]`;
	}

	isEqualTo(otherLine) {
		if (!(otherLine instanceof Line)) return false;
		return (
			(this.start.isEqualTo(otherLine.start) &&
				this.end.isEqualTo(otherLine.end)) ||
			(this.start.isEqualTo(otherLine.end) &&
				this.end.isEqualTo(otherLine.start))
		);
	}

	get length() {
		return this.start.findDistanceTo(this.end);
	}

	get slope() {
		return (this.end.y - this.start.y) / (this.end.x - this.start.x);
	}

	isParallelTo(otherLine) {
		if (
			!(otherLine instanceof Line) ||
			arePointsCollinear(this.start, this.end, otherLine.start)
		)
			return false;
		if (
			Math.abs(this.slope) == Infinity &&
			Math.abs(otherLine.slope) == Infinity
		)
			return true;
		return this.slope == otherLine.slope;
	}

	findX(y) {
		if (!isNumberInRange([this.start.y, this.end.y], y)) return NaN;
		if (this.start.x == this.end.x || this.start.y == this.end.y)
			return this.start.x;
		const m = this.slope;
		const c = this.start.y - m * this.start.x;
		return (y - c) / m;
	}

	findY(x) {
		if (!isNumberInRange([this.start.x, this.end.x], x)) return NaN;
		if (this.start.x == this.end.x || this.start.y == this.end.y)
			return this.start.y;
		const m = this.slope;
		const c = this.start.y - m * this.start.x;
		return m * x + c;
	}

	split() {
		const midPoint = {
			x: (this.start.x + this.end.x) / 2,
			y: (this.start.y + this.end.y) / 2
		};
		return [new Line(this.start, midPoint), new Line(midPoint, this.end)];
	}

	hasPoint(otherPoint) {
		return (
			otherPoint instanceof Point &&
			(otherPoint.y == this.findY(otherPoint.x) ||
				otherPoint.x == this.findX(otherPoint.y))
		);
	}

	findPointFromStart(distance) {
		const distanceRatio = distance / this.length;
		if (distanceRatio < 0 || distanceRatio > 1) {
			return null;
		}
		const x = (1 - distanceRatio) * this.start.x + distanceRatio * this.end.x;
		const y = (1 - distanceRatio) * this.start.y + distanceRatio * this.end.y;
		if (isNaN(x) || isNaN(y)) return null;
		return new Point(x, y);
	}

	findPointFromEnd(distance) {
		return this.findPointFromStart(this.length - distance);
	}
}

module.exports = Line;
