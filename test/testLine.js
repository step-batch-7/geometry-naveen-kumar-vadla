"use strict";

const assert = require("assert");
const Line = require("../src/line");

describe("Line", function() {
	describe("toString", function() {
		it("Should give the string representation of given object ", function() {
			const lineObj = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
			const expected = `Line (1,2) ----- (3,4)`;
			assert.strictEqual(lineObj.toString(), expected);
		});
	});
});
