"use strict";

const { assert } = require("chai");

const Rectangle = require("../src/rectangle");
const Point = require("../src/point");

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
		it("Should give true when equal rectangles of different reference are given", () => {
			const rectangle1 = new Rectangle({ x: 0, y: 2 }, { x: 4, y: 0 });
			const rectangle2 = new Rectangle({ x: 0, y: 2 }, { x: 4, y: 0 });
			assert.ok(rectangle1.isEqualTo(rectangle2));
		});

		it("Should give true if reference of both rectangles is same", () => {
			const rectangle = new Rectangle({ x: 2, y: 0 }, { x: 4, y: 0 });
			assert.ok(rectangle.isEqualTo(rectangle));
		});

		it("Should give false when rectangles of different diagonals are given", () => {
			const rectangle1 = new Rectangle({ x: 0, y: 2 }, { x: 4, y: 0 });
			const rectangle2 = new Rectangle({ x: 6, y: 2 }, { x: 10, y: 0 });
			assert.notOk(rectangle1.isEqualTo(rectangle2));
		});

		it("Should given false when an object which is not instance of rectangle is given", () => {
			const rectangle1 = new Rectangle({ x: 0, y: 2 }, { x: 4, y: 0 });
			const rectangle2 = {
				vertexA: { x: 0, y: 2 },
				vertexB: { x: 4, y: 2 },
				vertexC: { x: 4, y: 0 },
				vertexD: { x: 0, y: 0 }
			};
			assert.notOk(rectangle1.isEqualTo(rectangle2));
		});

		it("Should give true if other diagonal of same rectangle is given", () => {
			const rectangle1 = new Rectangle({ x: 0, y: 2 }, { x: 4, y: 0 });
			const rectangle2 = new Rectangle({ x: 4, y: 2 }, { x: 0, y: 0 });
			assert.ok(rectangle1.isEqualTo(rectangle2));
		});
	});

	describe("hasPoint", () => {
		it("Should give true if given point is on the on one circumference of rectangle", () => {
			const rectangle = new Rectangle({ x: 0, y: 2 }, { x: 4, y: 0 });
			const point = new Point(0, 1);
			assert.ok(rectangle.hasPoint(point));
		});

		it("Should give false if an Object is given which is not an instance of Point class", () => {
			const rectangle = new Rectangle({ x: 0, y: 2 }, { x: 4, y: 0 });
			const point = { x: 0, y: 1 };
			assert.notOk(rectangle.hasPoint(point));
		});
	});

	describe("covers", () => {
		it("Should give true if given point is inside the rectangle", () => {
			const rectangle = new Rectangle({ x: 0, y: 2 }, { x: 4, y: 0 });
			const point = new Point(2, 1);
			assert.ok(rectangle.covers(point));
		});
	});
});
