"use strict";

const { assert } = require("chai");
const Line = require("../src/line");

describe("Line", () => {
	describe("toString", () => {
		it("Should give the string representation of given object ", () => {
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
			assert.notOk(line1.isEqualTo(line2));
		});

		it("should invalidate if lines of unequal end points are given", () => {
			const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
			const line2 = new Line({ x: 1, y: 2 }, { x: 0, y: 0 });
			assert.notOk(line1.isEqualTo(line2));
		});

		it("should invalidate if a object is given that is not an instance of Line class", () => {
			const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
			const line2 = { start: { x: 1, y: 2 }, end: { x: 3, y: 4 } };
			assert.notOk(line1.isEqualTo(line2));
		});
	});

	describe("length", () => {
		it("Should give length of the given line having positive points", () => {
			const line = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
			assert.approximately(line.length, 2.8, 0.2);
		});
		it("Should give length of the given line having negative points", () => {
			const line = new Line({ x: 1, y: -2 }, { x: -3, y: 4 });
			assert.approximately(line.length, 7.2, 0.2);
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
		it("Should give slope of given line having same y coordinate points", () => {
			const line = new Line({ x: 1, y: 2 }, { x: 2, y: 2 });
			assert.strictEqual(line.slope, 0);
		});
		it("Should give slope of given line having same x coordinate points", () => {
			const line = new Line({ x: 1, y: 2 }, { x: 1, y: 3 });
			assert.strictEqual(line.slope, Infinity);
		});
	});

	describe("isParallelTo", () => {
		it("Should validate for two parallel lines having positive points", () => {
			const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
			const line2 = new Line({ x: 5, y: 6 }, { x: 7, y: 8 });
			assert.ok(line1.isParallelTO(line2));
		});
		it("Should validate for two parallel lines having negative points", () => {
			const line1 = new Line({ x: -1, y: -2 }, { x: -3, y: -4 });
			const line2 = new Line({ x: -5, y: -6 }, { x: -7, y: -8 });
			assert.ok(line1.isParallelTO(line2));
		});
		it("Should validate for two nonparallel lines having positive points", () => {
			const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
			const line2 = new Line({ x: 5, y: 9 }, { x: 7, y: 8 });
			assert.notOk(line1.isParallelTO(line2));
		});
		it("Should validate for two nonparallel lines having negative points", () => {
			const line1 = new Line({ x: -1, y: -2 }, { x: -3, y: -4 });
			const line2 = new Line({ x: -5, y: 6 }, { x: 7, y: -8 });
			assert.notOk(line1.isParallelTO(line2));
		});
		it("Should validate lines having same points", () => {
			const line1 = new Line({ x: -1, y: -2 }, { x: -3, y: -4 });
			const line2 = new Line({ x: -1, y: -2 }, { x: -3, y: -4 });
			assert.notOk(line1.isParallelTO(line2));
		});
		it("should invalidate if a object is given that is not an instance of Line class", () => {
			const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
			const line2 = { start: { x: 1, y: 2 }, end: { x: 3, y: 4 } };
			assert.notOk(line1.isParallelTO(line2));
		});
	});
});
