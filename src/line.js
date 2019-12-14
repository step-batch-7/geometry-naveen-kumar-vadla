"use strict";

const arePointsEqual = (point1, point2) => {
	const areXCoordinatesEqual = point1.x == point2.x;
	const areYCoordinatesEqual = point1.y == point2.y;
	return areXCoordinatesEqual && areYCoordinatesEqual;
};

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
		return areStartingPointsEqual && areEndingPointsEqual;
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
		const slopeOfLine1 = this.slope;
		const slopeOfLine2 = otherLine.slope;
		return slopeOfLine1 == slopeOfLine2;
	}

	findX(y) {
		if (this.start.x == this.end.x || this.start.y == this.end.y) {
			return this.start.x;
		}

		if (!isNumberInRange([this.start.y, this.end.y], y)) {
			return NaN;
		}

		const m = this.slope;
		const c = this.start.y - m * this.start.x;

		return (y - c) / m;
	}

	findY(x) {
		if (this.start.x == this.end.x || this.start.y == this.end.y) {
			return this.start.y;
		}

		if (!isNumberInRange([this.start.x, this.end.x], x)) {
			return NaN;
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
}

module.exports = Line;
