"use strict";

const { Point } = require("./point");

const isNumberInRange = (range, number) => {
	const lowerLimit = Math.min(...range);
	const upperLimit = Math.max(...range);
	return number >= lowerLimit && number <= upperLimit;
};

const getMidPoint = (start, end) => {
	const midOfXs = (start.x + end.x) / 2;
	const midOfYs = (start.y + end.y) / 2;
	return { x: midOfXs, y: midOfYs };
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
		const isInstanceOfLine = otherLine instanceof Line;
		if (!isInstanceOfLine) return false;

		const areStartingPointsEqual = this.start.isEqualTo(otherLine.start);
		const areEndingPointsEqual = this.end.isEqualTo(otherLine.end);
		const areStartAndEndEqual = this.start.isEqualTo(otherLine.end);
		const areEndAndStartEqual = this.end.isEqualTo(otherLine.start);

		return (
			(areStartingPointsEqual && areEndingPointsEqual) ||
			(areStartAndEndEqual && areEndAndStartEqual)
		);
	}

	get length() {
		return this.start.findDistanceTo(this.end);
	}

	get slope() {
		const diffOfYPoints = this.end.y - this.start.y;
		const diffOfXPoints = this.end.x - this.start.x;

		return diffOfYPoints / diffOfXPoints;
	}

	isParallelTO(otherLine) {
		if (!(otherLine instanceof Line) || this.isEqualTo(otherLine)) return false;

		const areCollinear = arePointsCollinear(
			this.start,
			this.end,
			otherLine.start
		);

		return !areCollinear && this.slope == otherLine.slope;
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
		const midPoint = getMidPoint(this.start, this.end);

		const firstHalfLine = new Line(this.start, midPoint);
		const secondHalfLine = new Line(midPoint, this.end);

		return [firstHalfLine, secondHalfLine];
	}

	hasPoint(otherPoint) {
		const doesItHasPoint =
			otherPoint.y == this.findY(otherPoint.x) ||
			otherPoint.x == this.findX(otherPoint.y);
		return otherPoint instanceof Point && doesItHasPoint;
	}
}

module.exports = { Line };
