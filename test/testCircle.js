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
			assert.approximately(circle.area(), 3.14, 0.2);
		});
	});
});
