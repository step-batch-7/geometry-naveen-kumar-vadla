"use strict";

const { assert } = require("chai");

const Rectangle = require("../src/rectangle");

describe("Rectangle", () => {
	describe("toString", () => {
		it("Should give string representation of given rectangle", () => {
			const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 2, y: 3 });
			const expected = "[Rectangle (1,1) to (2,3)]";
			assert.strictEqual(rectangle.toString(), expected);
		});
	});

	describe("area", () => {
		it("Should give the area if diagonal length is greater than zero", () => {
			const rectangle = new Rectangle({ x: 0, y: 2 }, { x: 4, y: 0 });
			assert.strictEqual(rectangle.area, 8);
		});

		it("should give the area zero if diagonal length is equal to zero", () => {
			const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 0, y: 0 });
			assert.strictEqual(rectangle.area, 0);
		});

		it("should give the area zero if breadth is zero", function() {
			const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 0, y: 4 });
			assert.strictEqual(rectangle.area, 0);
		});

		it("should give the area zero if length is zero", function() {
			const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 4, y: 0 });
			assert.strictEqual(rectangle.area, 0);
		});
	});

	describe("perimeter", () => {
		it("Should give the perimeter if diagonal length is greater than zero", () => {
			const rectangle = new Rectangle({ x: 0, y: 2 }, { x: 4, y: 0 });
			assert.strictEqual(rectangle.perimeter, 12);
		});

		it("Should give the perimeter zero if diagonal length is equal to zero", () => {
			const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 0, y: 0 });
			assert.strictEqual(rectangle.area, 0);
		});

		it("should give the perimeter zero if breadth is zero", function() {
			const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 0, y: 4 });
			assert.strictEqual(rectangle.area, 0);
		});

		it("should give the perimeter zero if length is zero", function() {
			const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 4, y: 0 });
			assert.strictEqual(rectangle.area, 0);
		});
	});

	describe("isEqualTo", () => {
		it("Should give true when equal rectangles are given", () => {
			const rectangle1 = new Rectangle({ x: 0, y: 2 }, { x: 4, y: 0 });
			const rectangle2 = new Rectangle({ x: 0, y: 2 }, { x: 4, y: 0 });
			assert.ok(rectangle1.isEqualTo(rectangle2));
		});
	});
});
