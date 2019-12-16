"use strict";

const { Point } = require("./point");
const {
	arePointsEqual,
	isNumberInRange,
	getMidPoint,
	arePointsCollinear
} = require("./utilities");

class Line {
	constructor(start, end) {
		this.start = { x: start.x, y: start.y };
		this.end = { x: end.x, y: end.y };
	}

	toString() {
		const startingPoints = `(${this.start.x},${this.start.y})`;
		const endingPoints = `(${this.end.x},${this.end.y})`;
		return `[Line ${startingPoints} to ${endingPoints}]`;
	}

	isEqualTo(otherLine) {
		const isInstanceOfLine = otherLine instanceof Line;
		if (!isInstanceOfLine) {
			return false;
		}
		const areStartingPointsEqual = arePointsEqual(this.start, otherLine.start);
		const areEndingPointsEqual = arePointsEqual(this.end, otherLine.end);
		const areStartAndEndEqual = arePointsEqual(this.start, otherLine.end);
		const areEndAndStartEqual = arePointsEqual(this.end, otherLine.start);
		return (
			(areStartingPointsEqual && areEndingPointsEqual) ||
			(areStartAndEndEqual && areEndAndStartEqual)
		);
	}

	get length() {
		const diffOfYPoints = this.end.y - this.start.y;
		const diffOfXPoints = this.end.x - this.start.x;
		const distance = Math.pow(diffOfXPoints, 2) + Math.pow(diffOfYPoints, 2);
		return Math.sqrt(distance);
	}

	get slope() {
		const diffOfYPoints = this.end.y - this.start.y;
		const diffOfXPoints = this.end.x - this.start.x;
		return diffOfYPoints / diffOfXPoints;
	}

	isParallelTO(otherLine) {
		if (!(otherLine instanceof Line) || this.isEqualTo(otherLine)) {
			return false;
		}
		const areCollinear = arePointsCollinear(
			this.start,
			this.end,
			otherLine.start
		);
		return !areCollinear && this.slope == otherLine.slope;
	}

	findX(y) {
		if (!isNumberInRange([this.start.y, this.end.y], y)) {
			return NaN;
		}

		if (this.start.x == this.end.x || this.start.y == this.end.y) {
			return this.start.x;
		}

		const m = this.slope;
		const c = this.start.y - m * this.start.x;

		return (y - c) / m;
	}

	findY(x) {
		if (!isNumberInRange([this.start.x, this.end.x], x)) {
			return NaN;
		}

		if (this.start.x == this.end.x || this.start.y == this.end.y) {
			return this.start.y;
		}

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
