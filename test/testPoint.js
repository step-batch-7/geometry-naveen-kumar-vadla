"use strict";

const { assert } = require("chai");

const { Line } = require("../src/line");
const { Point } = require("../src/point");

describe("point", () => {
	describe("toString", () => {
		it("Should give the string representation of given Point", () => {
			const point = new Point(1, 2);
			assert.strictEqual(point.toString(), `[Point @(1,2)]`);
		});
	});

	describe("isEqualTO", () => {
		it("should give true if equal points are given", () => {
			const point1 = new Point(1, 2);
			const point2 = new Point(1, 2);
			assert.ok(point1.isEqualTo(point2));
		});

		it("should give false if points of unequal x-coordinates are given", () => {
			const point1 = new Point(1, 2);
			const point2 = new Point(3, 2);
			assert.notOk(point1.isEqualTo(point2));
		});

		it("should give false if points of unequal y-coordinates are given", () => {
			const point1 = new Point(1, 2);
			const point2 = new Point(1, 3);
			assert.notOk(point1.isEqualTo(point2));
		});

		it("should give false if an object which is not an instance of Point is given", () => {
			const point1 = new Point(1, 2);
			const point2 = { x: 1, y: 2 };
			assert.notOk(point1.isEqualTo(point2));
		});
	});

	describe("visit", () => {
		it("should perform the given action sum and give the result", function() {
			const point = new Point(1, 2);
			const actual = point.visit((x, y) => x + y);
			assert.strictEqual(actual, 3);
		});

		it("should perform the given action difference and give the result", function() {
			const point = new Point(-1, -2);
			const actual = point.visit((x, y) => x - y);
			assert.strictEqual(actual, 1);
		});
	});

	describe("clone", () => {
		it("should give a copy of point for positive coordinates", function() {
			const point = new Point(2, 3);
			const actual = point.clone();
			const expected = new Point(2, 3);
			assert.deepStrictEqual(actual, expected);
			assert.notEqual(actual, expected);
		});

		it("should give a copy of point for negative coordinates", function() {
			const point = new Point(-2, -3);
			const actual = point.clone();
			const expected = new Point(-2, -3);
			assert.deepStrictEqual(actual, expected);
			assert.notEqual(actual, expected);
		});

		it("should give clone point for a point with undefined coordinate", () => {
			const point = new Point();
			const actual = point.clone();
			const expected = new Point();
			assert.deepStrictEqual(actual, expected);
			assert.notEqual(actual, expected);
		});
	});

	describe("findDistanceTo", () => {
		it("Should give distance of the given positive points", () => {
			const point1 = new Point(1, 1);
			const point2 = new Point(2, 2);
			assert.approximately(point1.findDistanceTo(point2), 1, 0.5);
		});

		it("Should give distance of the given negative points", () => {
			const point1 = new Point(-1, -1);
			const point2 = new Point(-2, -2);
			assert.approximately(point1.findDistanceTo(point2), 1, 0.5);
		});

		it("Should give distance 0 if given same points", () => {
			const point1 = new Point(1, 2);
			const point2 = new Point(1, 2);
			assert.approximately(point1.findDistanceTo(point2), 0, 0);
		});

		it("Should give NaN if a object which is not an instance of point is given", () => {
			const point1 = new Point(1, 1);
			const point2 = { x: 2, y: 2 };
			assert.isNaN(point1.findDistanceTo(point2));
		});
	});

	describe("isOn", () => {
		it("Should give true if given line has the point when positive coordinates are given", () => {
			const line = new Line({ x: 0, y: 0 }, { x: 4, y: 4 });
			const point = new Point(2, 2);
			assert.ok(point.isOn(line));
		});

		it("Should give true if given line has the point when negative coordinates are given", () => {
			const line = new Line({ x: -1, y: -1 }, { x: -4, y: -4 });
			const point = new Point(-2, -2);
			assert.isOk(point.isOn(line));
		});

		it("should give false if line doesn't have the point when positive coordinates are given", () => {
			const line = new Line({ x: 0, y: 0 }, { x: 4, y: 4 });
			const point = new Point(1, 2);
			assert.isNotOk(point.isOn(line));
		});

		it("should give false if line doesn't have the point when negative coordinates are given", () => {
			const line = new Line({ x: -1, y: -1 }, { x: -4, y: -4 });
			const point = new Point(-1, -2);
			assert.isNotOk(point.isOn(line));
		});
	});
});
