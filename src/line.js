"use strict";

const arePointsEqual = function(point1, point2) {
	const areXCoordinatesEqual = point1.x == point2.x;
	const areYCoordinatesEqual = point1.y == point2.y;
	return areXCoordinatesEqual && areYCoordinatesEqual;
};

class Line {
	constructor(start, end) {
		this.start = { x: start.x, y: start.y };
		this.end = { x: end.x, y: end.y };
	}
	toString() {
		const startingPoints = `(${this.start.x},${this.start.y})`;
		const endingPoints = `(${this.end.x},${this.end.y})`;
		return `Line ${startingPoints} ----- ${endingPoints}`;
	}
	isEqualTo(otherLine) {
		const isInstanceOfLine = otherLine instanceof Line;
		const areStartingPointsEqual = arePointsEqual(this.start, otherLine.start);
		const areEndingPointsEqual = arePointsEqual(this.end, otherLine.end);
		return isInstanceOfLine && areStartingPointsEqual && areEndingPointsEqual;
	}
	get length() {
		const x1 = this.start.x;
		const y1 = this.start.y;
		const x2 = this.end.x;
		const y2 = this.end.y;
		const sumOfDistance = Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2);
		const distance = Math.sqrt(sumOfDistance);
		return Math.floor(distance);
	}
	get slope() {
		const x1 = this.start.x;
		const y1 = this.start.y;
		const x2 = this.end.x;
		const y2 = this.end.y;
		return (y2 - y1) / (x2 - x1);
	}
	isParallelTO(otherLine) {
		const slopeOfLine1 = this.slope;
		const slopeOfLine2 = otherLine.slope;
		return slopeOfLine1 == slopeOfLine2;
	}
}

module.exports = Line;
