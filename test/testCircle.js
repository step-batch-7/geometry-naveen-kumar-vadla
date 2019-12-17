"use strict";

const { assert } = require("chai");

const Circle = require("../src/circle");

describe("Circle", () => {
	describe("toString", () => {
		it("Should give string representation of given circle", () => {
			const circle = new Circle({ x: 1, y: 2 }, 5);
			const expected = "[Circle @(1,2) radius 5]";
			assert.strictEqual(circle.toString(), expected);
		});
	});

	describe("area", () => {
		it("Should give area of given circle", () => {
			const circle = new Circle({ x: 0, y: 0 }, 1);
			assert.approximately(circle.area, 3.14, 0.2);
		});

		it("Should give area 0 if given circle radius is 0", () => {
			const circle = new Circle({ x: 0, y: 0 }, 0);
			assert.strictEqual(circle.area, 0);
		});
	});

	describe("perimeter", () => {
		it("Should given perimeter of given circle", () => {
			const circle = new Circle({ x: 1, y: 2 }, 1);
			assert.approximately(circle.perimeter, 6.2, 0.2);
		});

		it("should give 0 as perimeter when radius is 0", () => {
			const circle = new Circle({ x: 0, y: 0 }, 0);
			assert.strictEqual(circle.perimeter, 0);
		});
	});

	describe("isEqualTO", () => {
		it("Should give true when equal circles are given", () => {
			const circle1 = new Circle({ x: 1, y: 2 }, 1);
			const circle2 = new Circle({ x: 1, y: 2 }, 1);
			assert.ok(circle1.isEqualTo(circle2));
		});
	});
});
