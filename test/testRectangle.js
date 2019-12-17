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
});
