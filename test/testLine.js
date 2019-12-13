"use strict";

const assert = require("assert");
const Line = require("../src/line");

describe("Line", () => {
	describe("toString", () => {
		it("Should give the string representation of given object ", function() {
			const lineObj = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
			const expected = `Line (1,2) ----- (3,4)`;
			assert.strictEqual(lineObj.toString(), expected);
		});
	});

	describe("isEqualTO", () => {
		it("should validate if equal lines are given", () => {
			const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
			const line2 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
			assert.ok(line1.isEqualTo(line2));
		});

		it("should invalidate if lines of unequal start points are given", () => {
			const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
			const line2 = new Line({ x: 0, y: 0 }, { x: 3, y: 4 });
			assert.ok(!line1.isEqualTo(line2));
		});

		it("should invalidate if lines of unequal end points are given", () => {
			const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
			const line2 = new Line({ x: 1, y: 2 }, { x: 0, y: 0 });
			assert.ok(!line1.isEqualTo(line2));
		});

		it("should invalidate if a object is given that is not an instance of Line class", () => {
			const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
			const line2 = { start: { x: 1, y: 2 }, end: { x: 3, y: 4 } };
			assert.ok(!line1.isEqualTo(line2));
		});
	});

	describe("length", function() {
		it("Should give length of the given line having positive points", function() {
			const line = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
			assert.strictEqual(line.length, 2);
		});
		it("Should give length of the given line having negative points", function() {
			const line = new Line({ x: 1, y: -2 }, { x: -3, y: 4 });
			assert.strictEqual(line.length, 7);
		});
		it("Should give length of the given line having same points", function() {
			const line = new Line({ x: 1, y: 2 }, { x: 1, y: 2 });
			assert.strictEqual(line.length, 0);
		});
	});
});
