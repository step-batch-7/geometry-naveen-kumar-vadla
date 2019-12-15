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
});
