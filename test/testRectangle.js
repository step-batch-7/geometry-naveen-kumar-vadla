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
		it("Should give the area of the given rectangle", () => {
			const rectangle = new Rectangle({ x: 0, y: 2 }, { x: 4, y: 0 });
			assert.strictEqual(rectangle.area, 8);
		});

		it("should give area 0 if diagonal of length 0 give is given", () => {
			const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 0, y: 0 });
			assert.strictEqual(rectangle.area, 0);
		});
	});
});
