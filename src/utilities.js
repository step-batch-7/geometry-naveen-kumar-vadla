"use strict";

const arePointsEqual = (point1, point2) => {
	const areXCoordinatesEqual = point1.x == point2.x;
	const areYCoordinatesEqual = point1.y == point2.y;
	return areXCoordinatesEqual && areYCoordinatesEqual;
};

module.exports = { arePointsEqual };
