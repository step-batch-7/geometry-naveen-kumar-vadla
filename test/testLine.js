"use strict";

const { assert } = require("chai");

const Line = require("../src/line");
const Point = require("../src/point");

describe("Line", () => {
	describe("toString", () => {
		it("Should give the string representation of given Line", () => {
			const lineObj = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
			const expected = `[Line (1,2) to (3,4)]`;
			assert.strictEqual(lineObj.toString(), expected);
		});
	});

	describe("isEqualTO", () => {
		it("should give true if equal lines are given", () => {
			const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
			const line2 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
			assert.ok(line1.isEqualTo(line2));
		});

		it("should give false if lines of unequal start points are given", () => {
			const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
			const line2 = new Line({ x: 0, y: 0 }, { x: 3, y: 4 });
			assert.notOk(line1.isEqualTo(line2));
		});

		it("should give false if lines of unequal end points are given", () => {
			const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
			const line2 = new Line({ x: 1, y: 2 }, { x: 0, y: 0 });
			assert.notOk(line1.isEqualTo(line2));
		});

		it("should give false if a object is given that is not an instance of Line class", () => {
			const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
			const line2 = { start: { x: 1, y: 2 }, end: { x: 3, y: 4 } };
			assert.notOk(line1.isEqualTo(line2));
		});

		it("should give false if start of line1 matches with end of line2 ", () => {
			const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
			const line2 = new Line({ x: 3, y: 5 }, { x: 1, y: 2 });
			assert.notOk(line1.isEqualTo(line2));
		});

		it("should give false if end of line1 matches with start of line2", () => {
			const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
			const line2 = new Line({ x: 3, y: 4 }, { x: 1, y: 3 });
			assert.notOk(line1.isEqualTo(line2));
		});

		it("Should give true if two equal lines are given in reverse also", () => {
			const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
			const line2 = new Line({ x: 3, y: 4 }, { x: 1, y: 2 });
			assert.ok(line1.isEqualTo(line2));
		});
	});

	describe("length", () => {
		it("Should give length of the given line having positive points", () => {
			const line = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
			assert.approximately(line.length, 3, 0.5);
		});

		it("Should give length of the given line having negative points", () => {
			const line = new Line({ x: 1, y: -2 }, { x: -3, y: 4 });
			assert.approximately(line.length, 7, 0.5);
		});

		it("Should give length of the given line having same points", () => {
			const line = new Line({ x: 1, y: 2 }, { x: 1, y: 2 });
			assert.strictEqual(line.length, 0);
		});
	});

	describe("slope", () => {
		it("Should give slope of given line having positive points", () => {
			const line = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
			assert.strictEqual(line.slope, 1);
		});

		it("Should give slope of given line having negative points", () => {
			const line = new Line({ x: -1, y: 2 }, { x: 3, y: -4 });
			assert.strictEqual(line.slope, -1.5);
		});

		it("Should give slope of given line having y2 == y1 and x2 > x1", () => {
			const line = new Line({ x: 1, y: 2 }, { x: 2, y: 2 });
			assert.strictEqual(line.slope, 0);
		});

		it("Should give slope of given line having y2 == y1 and x2 < x1", () => {
			const line = new Line({ x: 2, y: 2 }, { x: 1, y: 2 });
			assert.strictEqual(line.slope, -0);
		});

		it("Should give slope of given line having x2 == x1 and y2 > y1", () => {
			const line = new Line({ x: 1, y: 2 }, { x: 1, y: 3 });
			assert.strictEqual(line.slope, Infinity);
		});

		it("Should give slope of given line having x2 == x1 and y2 < y1", () => {
			const line = new Line({ x: 1, y: 3 }, { x: 1, y: 2 });
			assert.strictEqual(line.slope, -Infinity);
		});

		it("Should give null if both points are same", () => {
			const line = new Line({ x: 1, y: 2 }, { x: 1, y: 2 });
			assert.isNaN(line.slope);
		});
	});

	describe("isParallelTo", () => {
		it("Should give true for two parallel lines having positive points", () => {
			const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
			const line2 = new Line({ x: 2, y: 2 }, { x: 4, y: 4 });
			assert.ok(line1.isParallelTo(line2));
		});

		it("Should give true for two parallel lines having negative points", () => {
			const line1 = new Line({ x: -1, y: -2 }, { x: -3, y: -4 });
			const line2 = new Line({ x: -2, y: -2 }, { x: -4, y: -4 });
			assert.ok(line1.isParallelTo(line2));
		});

		it("Should give false for two nonparallel lines having positive points", () => {
			const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
			const line2 = new Line({ x: 5, y: 9 }, { x: 7, y: 8 });
			assert.notOk(line1.isParallelTo(line2));
		});

		it("Should give false for two nonparallel lines having negative points", () => {
			const line1 = new Line({ x: -1, y: -2 }, { x: -3, y: -4 });
			const line2 = new Line({ x: -2, y: 2 }, { x: 4, y: -4 });
			assert.notOk(line1.isParallelTo(line2));
		});

		it("Should give false lines having same points", () => {
			const line1 = new Line({ x: -1, y: -2 }, { x: -3, y: -4 });
			const line2 = new Line({ x: -1, y: -2 }, { x: -3, y: -4 });
			assert.notOk(line1.isParallelTo(line2));
		});

		it("should give false if a object is given that is not an instance of Line class", () => {
			const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
			const line2 = { start: { x: 1, y: 2 }, end: { x: 3, y: 4 } };
			assert.notOk(line1.isParallelTo(line2));
		});

		it("Should give false for overlapping if second line is within the first line ", () => {
			const line1 = new Line({ x: 0, y: 0 }, { x: 4, y: 4 });
			const line2 = new Line({ x: 2, y: 2 }, { x: 5, y: 5 });
			assert.notOk(line1.isParallelTo(line2));
		});

		it("Should give false for overlapping if second line is larger than first line", () => {
			const line1 = new Line({ x: 1, y: 0 }, { x: 5, y: 0 });
			const line2 = new Line({ x: -1, y: 0 }, { x: 6, y: 0 });
			assert.notOk(line1.isParallelTo(line2));
		});

		it("Should give false for collinear Lines", () => {
			const line1 = new Line({ x: 0, y: 0 }, { x: 2, y: 2 });
			const line2 = new Line({ x: 3, y: 3 }, { x: 4, y: 4 });
			assert.notOk(line1.isParallelTo(line2));
		});

		it("Should give true if line is parallel to y-axis", () => {
			const line1 = new Line({ x: 0, y: 0 }, { x: 0, y: 1 });
			const line2 = new Line({ x: 1, y: 0 }, { x: 1, y: -2 });
			assert.ok(line1.isParallelTo(line2));
		});

		it("Should give true if line is parallel to x-axis", () => {
			const line1 = new Line({ x: 0, y: 0 }, { x: 1, y: 0 });
			const line2 = new Line({ x: 0, y: 1 }, { x: -2, y: 1 });
			assert.ok(line1.isParallelTo(line2));
		});
	});

	describe("findX", () => {
		it("Should give NaN if a given point is Outside the Line segment", () => {
			const line = new Line({ x: 1, y: 1 }, { x: 3, y: 2 });
			assert.isNaN(line.findX(8));
		});

		it("Should give starting point of x when starting point of y is given ", () => {
			const line = new Line({ x: 2, y: 1 }, { x: 3, y: 2 });
			assert.approximately(line.findX(1), 2, 0);
		});

		it("Should give ending point x when ending point of y is given ", () => {
			const line = new Line({ x: 2, y: 1 }, { x: 3, y: 2 });
			assert.approximately(line.findX(2), 3, 0);
		});

		it("should give x-coordinate of a point when y is given positive", function() {
			const line1 = new Line({ x: 1, y: 1 }, { x: 3, y: 2 });
			assert.approximately(line1.findX(1.5), 2, 0);
		});

		it("should give x-coordinate of a point when y is given negative", function() {
			const line1 = new Line({ x: -1, y: -1 }, { x: -3, y: -2 });
			assert.approximately(line1.findX(-1.5), -2, 0);
		});

		it("Should give starting x value when starting and ending x values are same", () => {
			const line = new Line({ x: 1, y: 2 }, { x: 1, y: 3 });
			assert.approximately(line.findX(2.5), 1, 0);
		});

		it("Should give starting x value when starting and ending y values are same", () => {
			const line = new Line({ x: 2, y: 3 }, { x: 5, y: 3 });
			assert.approximately(line.findX(3), 2, 0);
		});
	});

	describe("findY", () => {
		it("Should give null if a given point is Outside the Line segment", () => {
			const line = new Line({ x: 1, y: 1 }, { x: 3, y: 2 });
			assert.isNaN(line.findY(8), null);
		});

		it("Should give starting point of y when starting point of x is given ", () => {
			const line = new Line({ x: 2, y: 1 }, { x: 3, y: 2 });
			assert.approximately(line.findY(2), 1, 0);
		});

		it("Should give ending point y when ending point of x is given ", () => {
			const line = new Line({ x: 2, y: 1 }, { x: 3, y: 2 });
			assert.approximately(line.findY(3), 2, 0);
		});

		it("should give y-coordinate of a point when x is given positive", function() {
			const line1 = new Line({ x: 1, y: 1 }, { x: 3, y: 2 });
			assert.approximately(line1.findY(2), 1.5, 0);
		});

		it("should give y-coordinate of a point when x is given negative", function() {
			const line1 = new Line({ x: -1, y: -1 }, { x: -3, y: -2 });
			assert.approximately(line1.findY(-2), -1.5, 0);
		});

		it("Should give starting y value when starting and ending x values are same", () => {
			const line = new Line({ x: 1, y: 2 }, { x: 1, y: 3 });
			assert.approximately(line.findY(1), 2, 0);
		});

		it("Should give starting y value when starting and ending y values are same", () => {
			const line = new Line({ x: 2, y: 3 }, { x: 5, y: 3 });
			assert.approximately(line.findY(4), 3, 0);
		});
	});

	describe("split", () => {
		it("Should give 2 lines splitted exactly at center", () => {
			const line = new Line({ x: 1, y: 1 }, { x: 3, y: 3 });
			const firstHalfLine = new Line({ x: 1, y: 1 }, { x: 2, y: 2 });
			const secondHalfLine = new Line({ x: 2, y: 2 }, { x: 3, y: 3 });
			assert.deepStrictEqual(line.split(), [firstHalfLine, secondHalfLine]);
		});

		it("Should give 2 lines of length 0 when a line of length 0 is given", () => {
			const line = new Line({ x: 1, y: 1 }, { x: 1, y: 1 });
			const firstHalfLine = new Line({ x: 1, y: 1 }, { x: 1, y: 1 });
			const secondHalfLine = new Line({ x: 1, y: 1 }, { x: 1, y: 1 });
			assert.deepStrictEqual(line.split(), [firstHalfLine, secondHalfLine]);
		});
	});

	describe("hasPoint", () => {
		it("Should give true if a point is sent and it is present on Line", () => {
			const line = new Line({ x: 1, y: 1 }, { x: 4, y: 4 });
			const point = new Point(2, 2);
			assert.ok(line.hasPoint(point));
		});

		it("should give false if a point is sent and it is not on the line", function() {
			const line = new Line({ x: 1, y: 1 }, { x: 4, y: 4 });
			const point = new Point(3, 4);
			assert.notOk(line.hasPoint(point));
		});

		it("should give false if the given point object is not an instance of Point", function() {
			const line = new Line({ x: 1, y: 2 }, { x: 4, y: 5 });
			assert.notOk(line.hasPoint({ x: 3, y: 4 }));
		});
	});

	describe("findPointFromStart", () => {
		it("Should give a point of given distance from starting if given distance is less than the length of line", () => {
			const line = new Line({ x: 1, y: 0 }, { x: 5, y: 0 });
			const actual = line.findPointFromStart(2);
			const expected = new Point(3, 0);
			assert.deepStrictEqual(actual, expected);
		});

		it("should give start Point if given distance is 0", function() {
			const line = new Line({ x: 1, y: 0 }, { x: 5, y: 0 });
			const actual = line.findPointFromStart(0);
			const expected = new Point(1, 0);
			assert.deepStrictEqual(actual, expected);
		});

		it("should give end Point if given distance is equal to length", function() {
			const line = new Line({ x: 1, y: 0 }, { x: 5, y: 0 });
			const actual = line.findPointFromStart(4);
			const expected = new Point(5, 0);
			assert.deepStrictEqual(actual, expected);
		});

		it("should give null if given distance is greater than length", function() {
			const line = new Line({ x: 1, y: 0 }, { x: 5, y: 0 });
			assert.isNull(line.findPointFromStart(10));
		});

		it("should give null if given distance is less than length", function() {
			const line = new Line({ x: 1, y: 0 }, { x: 5, y: 0 });
			assert.isNull(line.findPointFromStart(-10));
		});

		it("Should give null if given point is not a number", () => {
			const line = new Line({ x: 1, y: 1 }, { x: 4, y: 4 });
			assert.isNull(line.findPointFromStart("point"));
		});
	});

	describe("findPointFromEnd", () => {
		it("Should give a point of given distance from ending if given distance is less than the length of line", () => {
			const line = new Line({ x: 1, y: 0 }, { x: 5, y: 0 });
			const actual = line.findPointFromEnd(2);
			const expected = new Point(3, 0);
			assert.deepStrictEqual(actual, expected);
		});

		it("should give end Point if given distance is 0", function() {
			const line = new Line({ x: 1, y: 0 }, { x: 5, y: 0 });
			const actual = line.findPointFromEnd(0);
			const expected = new Point(5, 0);
			assert.deepStrictEqual(actual, expected);
		});

		it("should give start Point if given distance is equal to length", function() {
			const line = new Line({ x: 1, y: 0 }, { x: 5, y: 0 });
			const actual = line.findPointFromEnd(4);
			const expected = new Point(1, 0);
			assert.deepStrictEqual(actual, expected);
		});

		it("should give null if given distance is greater than length", function() {
			const line = new Line({ x: 1, y: 0 }, { x: 5, y: 0 });
			assert.isNull(line.findPointFromEnd(10));
		});

		it("should give null if given distance is less than length", function() {
			const line = new Line({ x: 1, y: 0 }, { x: 5, y: 0 });
			assert.isNull(line.findPointFromEnd(-10));
		});

		it("Should give null if given point is not a number", () => {
			const line = new Line({ x: 1, y: 1 }, { x: 4, y: 4 });
			assert.isNull(line.findPointFromEnd("point"));
		});
	});
});
