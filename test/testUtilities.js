"use strict";

const { assert } = require("chai");

const { arePointsEqual } = require("../src/utilities");

describe("utilities", () => {
	describe("arePointsEqual", () => {
		it("Should give true for equal points", () => {
			const actual = arePointsEqual({ x: 1, y: 2 }, { x: 1, y: 2 });
			assert.ok(actual);
		});

		it("Should give false if x-coordinates are unequal", () => {
			const actual = arePointsEqual({ x: 1, y: 2 }, { x: 2, y: 2 });
			assert.notOk(actual);
		});

		it("Should give false if y-coordinates are unequal", () => {
			const actual = arePointsEqual({ x: 1, y: 2 }, { x: 1, y: 1 });
			assert.notOk(actual);
		});
	});
});
