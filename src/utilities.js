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
const arePointsCollinear = (point1, point2, point3) => {
	const [x1, y1] = [point1.x, point1.y];
	const [x2, y2] = [point2.x, point2.y];
	const [x3, y3] = [point3.x, point3.y];
	return x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2) == 0;
};

module.exports = {
	arePointsEqual,
	isNumberInRange,
	getMidPoint,
	arePointsCollinear
};
