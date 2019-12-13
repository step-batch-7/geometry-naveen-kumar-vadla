"use strict";

class Line {
	constructor(start, end) {
		this.start = { ...start };
		this.end = { ...end };
	}
	toString() {
		const constructorName = this.constructor.name;
		const startingPoints = `(${this.start.x},${this.start.y})`;
		const endingPoints = `(${this.end.x},${this.end.y})`;
		return `${constructorName} ${startingPoints} ----- ${endingPoints}`;
	}
}

module.exports = Line;
