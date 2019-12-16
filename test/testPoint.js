"use strict";

const { assert } = require("chai");

const Point = require("../src/point");

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
});
