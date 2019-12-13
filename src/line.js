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
	isEqualTo(anotherLine) {
		const isInstanceOfLine = anotherLine instanceof Line;
		const areStartingPointsEqual = arePointsEqual(
			this.start,
			anotherLine.start
		);
		const areEndingPointsEqual = arePointsEqual(this.end, anotherLine.end);
		return isInstanceOfLine && areStartingPointsEqual && areEndingPointsEqual;
	}
}

module.exports = Line;
