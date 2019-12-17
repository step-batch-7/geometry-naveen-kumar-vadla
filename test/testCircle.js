"use strict";

const { assert } = require("chai");

const Circle = require("../src/circle");
const Point = require("../src/point");

describe("Circle", () => {
	describe("toString", () => {
		it("Should give string representation of given circle", () => {
			const circle = new Circle({ x: 1, y: 2 }, 5);
			const expected = "[Circle @(1,2) radius 5]";
			assert.strictEqual(circle.toString(), expected);
		});
	});

	describe("area", () => {
		it("Should give area of given circle when radius is greater than 0", () => {
			const circle = new Circle({ x: 0, y: 0 }, 1);
			assert.approximately(circle.area, 3.14, 0.2);
		});

		it("Should give area 0 if given circle radius is equal 0", () => {
			const circle = new Circle({ x: 0, y: 0 }, 0);
			assert.strictEqual(circle.area, 0);
		});
	});

	describe("perimeter", () => {
		it("Should given perimeter of given circle when radius is greater than 0", () => {
			const circle = new Circle({ x: 1, y: 2 }, 1);
			assert.approximately(circle.perimeter, 6.2, 0.2);
		});

		it("should give 0 as perimeter when radius is equal 0", () => {
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

		it("Should give false when different radius are given", () => {
			const circle1 = new Circle({ x: 1, y: 2 }, 1);
			const circle2 = new Circle({ x: 1, y: 2 }, 2);
			assert.notOk(circle1.isEqualTo(circle2));
		});

		it("Should give false when different x-coordinates are given", () => {
			const circle1 = new Circle({ x: 1, y: 2 }, 1);
			const circle2 = new Circle({ x: 2, y: 2 }, 1);
			assert.notOk(circle1.isEqualTo(circle2));
		});

		it("Should give false when different y-coordinates are given", () => {
			const circle1 = new Circle({ x: 1, y: 2 }, 1);
			const circle2 = new Circle({ x: 1, y: 1 }, 1);
			assert.notOk(circle1.isEqualTo(circle2));
		});

		it("Should give false when an object which is not an instance of Circle", () => {
			const circle1 = new Circle({ x: 1, y: 2 }, 1);
			const circle2 = { center: { x: 1, y: 2 }, radius: 1 };
			assert.notOk(circle1.isEqualTo(circle2));
		});
	});

	describe("hasPoint", () => {
		it("should give true if the given point is on the circle", function() {
			const circle = new Circle({ x: 0, y: 0 }, 5);
			const point = new Point(0, 5);
			assert.ok(circle.hasPoint(point));
		});

		it("should give false if the given point is on the circumference of the circle", function() {
			const circle = new Circle({ x: 0, y: 0 }, 5);
			const point = new Point(0, 4);
			assert.notOk(circle.hasPoint(point));
		});

		it("should give false if the given point is outside the circumference of the circle", function() {
			const circle = new Circle({ x: 0, y: 0 }, 5);
			const point = new Point(0, 6);
			assert.notOk(circle.hasPoint(point));
		});

		it("should give false if an object is given which is not an instance of Point class", function() {
			const circle = new Circle({ x: 0, y: 0 }, 5);
			assert.notOk(circle.hasPoint({ x: 0, y: 5 }));
		});
	});

	describe("moveTo", () => {
		it("Should give new circle with same properties and at given positive center", () => {
			const circle = new Circle({ x: 0, y: 0 }, 2);
			const expected = new Circle({ x: 5, y: 5 }, 2);
			assert.ok(circle.moveTo({ x: 5, y: 5 }).isEqualTo(expected));
		});

		it("Should give new circle with same properties and at given negative center", () => {
			const circle = new Circle({ x: 0, y: 0 }, 2);
			const expected = new Circle({ x: -5, y: -5 }, 2);
			assert.ok(circle.moveTo({ x: -5, y: -5 }).isEqualTo(expected));
		});

		it("Should give the same circle when same position is given", () => {
			const circle = new Circle({ x: 0, y: 0 }, 2);
			assert.ok(circle.moveTo({ x: 0, y: 0 }).isEqualTo(circle));
		});
	});
});
