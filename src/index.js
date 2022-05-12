// Numbers
/**
 * Return a random float number between the given values and the given precision
 * 
 * @example
 * randomFloat(0, 1);
 * randomFloat(-10, 0, 5);
 * randomFloat(-550, 444);
 * 
 * @param {number} min - min value
 * @param {number} max - max value
 * @param {number} precision - the float precision
 * @returns {number} - random number
 */
export function randomFloat(min, max, precision = 2) {
	if (!max) {
		max = min;
		min = 0;
	}
	return parseFloat((Math.random() * (max - min) + min).toFixed(precision));
}

export function randomInt(min, max) { return Math.floor(randomFloat(min, max)); };

// Colors
export function randomColor() { return "#" + (Math.random() * 0xFFFFFF << 0).toString(16); }
export function randomColor0X() { return `0x${Math.floor(Math.random() * 16777215).toString(16)}`; }
export function randomRGBColor() { return `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`; }
export function randomRGBAColor() { return `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)}, ${Math.random().toFixed(5)})`; }

// Radians and Degrees
export function radiansToDegrees(r) { return r * (180 / Math.PI); }
export function degreesToRadians(d) { return d * (Math.PI / 180); }

// Numbers
export function sortAscending(arr) { return arr.sort((a, b) => a - b); }
export function sortDescending(arr) { return arr.sort((a, b) => b - a); }
export function formateScore(time) { return Number((time * 0.001).toFixed(0)); } // Formate Score by time

/**
 * Re-maps a number from one range to another
 * 
 * @see {@link https://gist.github.com/xposedbones/75ebaef3c10060a3ee3b246166caab56#gistcomment-2951694}
 * 
 * @param {*} value 
 * @param {*} x1 
 * @param {*} y1 
 * @param {*} x2 
 * @param {*} y2 
 * @returns {*} - value
 */
export function map(value, x1, y1, x2, y2) { return (value - x1) * (y2 - x2) / (y1 - x1) + x2; }

// Points
export function distanceTwoPoints(x1, y1, x2, y2) { return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2)); }
export function distanceTwoPointsVector2(point1, point2) { return distanceTwoPoints(point1.x, point1.y, point2.x, point2.y); }

export function angleBetweenTwoPoints(x1, y1, x2, y2) { return Math.atan2(y2 - y1, x2 - x1); }
export function angleBetweenTwoPointsVector2(point1, point2) { return angleBetweenTwoPoints(point1.x, point1.y, point2.x, point2.y); }
export function angleBetweenTwoPointsDegrees(x1, y1, x2, y2) { return angleBetweenTwoPointsRadians(x1, y1, x2, y2) * 180 / Math.PI; }
export function angleBetweenTwoPointsVector2Degrees(point1, point2) { return angleBetweenTwoPointsDegrees(point1.x, point1.y, point2.x, point2.y); }

// Circles
export function distanceBetweenTwoCirclesFromCircle(circle1, circle2) {
	return distanceTwoPoints(circle1.x, circle1.y, circle2.x, circle2.y) - (circle1.radius + circle2.radius);
}
export function distanceBetweenTwoCircles(x1, y1, radius1, x2, y2, radius2) {
	return distanceBetweenTwoCirclesFromCircle(
		{ x: x1, y: y1, radius: radius1 },
		{ x: x2, y: y2, radius: radius2 }
	);
}

export function circleArea(radius) { return Math.PI * radius * radius; }
export function circlePerimeter(radius) { return 2 * Math.PI * radius; }

// Rectangles
export function distanceBetweenTwoRectanglesFromBounds(rect1, rect2) {
	const xOverlap = Math.min(rect1.x + rect1.width, rect2.x + rect2.width) - Math.max(rect1.x, rect2.x);
	const yOverlap = Math.min(rect1.y + rect1.height, rect2.y + rect2.height) - Math.max(rect1.y, rect2.y);
	return xOverlap * yOverlap;
}
export function distanceBetweenTwoRectangles(x1, y1, width1, height1, x2, y2, width2, height2) {
	return distanceBetweenTwoRectanglesFromBounds(
		{ x: x1 + width1 / 2, y: y1 + height1 / 2, width: width1, height: height1 },
		{ x: x2 + width2 / 2, y: y2 + height2 / 2, width: width2, height: height2 }
	);
}

export function angleBetweenTwoRectanglesFromBounds(rect1, rect2) {
	const xOverlap = Math.min(rect1.x + rect1.width, rect2.x + rect2.width) - Math.max(rect1.x, rect2.x);
	const yOverlap = Math.min(rect1.y + rect1.height, rect2.y + rect2.height) - Math.max(rect1.y, rect2.y);
	return Math.atan2(yOverlap, xOverlap);
}
export function angleBetweenTwoRectangles(x1, y1, width1, height1, x2, y2, width2, height2) {
	return angleBetweenTwoRectanglesFromBounds(
		{ x: x1 + width1 / 2, y: y1 + height1 / 2, width: width1, height: height1 },
		{ x: x2 + width2 / 2, y: y2 + height2 / 2, width: width2, height: height2 }
	);
}

export function rectangleArea(width, height) { return width * height; }
export function rectanglePerimeter(width, height) { return 2 * (width + height); }
export function rectanglePerimeterFromBounds(rectangle) { return rectanglePerimeter(rectangle.x, rectangle.y, rectangle.width, rectangle.height); }

export function rectangleVertices(x, y, width, height) {
	return [
		{ x: x, y: y },
		{ x: x + width, y: y },
		{ x: x + width, y: y + height },
		{ x: x, y: y + height }
	];
}
export function rectangleVerticesFromBounds(rectangle) { return rectangleVertices(rectangle.x, rectangle.y, rectangle.width, rectangle.height); }

export function rectangleCenterX(x, width) { return x + width / 2; }
export function rectangleCenterY(y, height) { return y + height / 2; }
export function rectangleCenter(x, y, width, height) { return { x: rectangleCenterX(x, width), y: rectangleCenterY(y, height) }; }
export function rectangleCenterXFromBounds(rectangle) { return rectangleCenterX(rectangle.x, rectangle.width); }
export function rectangleCenterYFromBounds(rectangle) { return rectangleCenterY(rectangle.y, rectangle.height); }
export function rectangleCenterFromBounds(rectangle) { return rectangleCenter(rectangle.x, rectangle.y, rectangle.width, rectangle.height); }

// String
/**
 * Check if all characters are equal in a string
 */
export function allCharactersSame(string) {
	for (let i = 1; i < string.length; i++) {
		if (string[0] != string[i]) return false;
	}
	return true;
}

// Sort Objects by property
export function sortAscendingObj(arr, prop) { return arr.sort((a, b) => a[prop] - b[prop]); }
export function sortDescendingObj(arr, prop) { return arr.sort((a, b) => b[prop] - a[prop]); }

// Get Max/Min from a Array of Objects
export function getMinArrayObjects(arr, prop) { return Math.min.apply(Math, arr.map(o => o[prop])); }
export function getMaxArrayObjects(arr, prop) { return Math.max.apply(Math, arr.map(o => o[prop])); }

// Date
export function getDateFormatted() {
	const date = new Date();
	return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
}

// Eliminate all child elements of a choice parent element, for example: ul
export function deleteAllChildDom(domElement) {
	while (domElement.hasChildNodes()) {
		domElement.removeChild(domElement.firstChild);
	}
}

/**
 * Compare if two object are equal
 * 
 * @example
 * compare2Objects({a:1, b:2}, {a: 1}); // false
 * compare2Objects({a:1, b:2}, {a: 1, b: 2 }); // true
 * 
 * @param {*} object1 - the first object/array to compare
 * @param {*} object2 - the second object/array to compare
 * @returns {boolean} - true if the two object are equal
 */
export function compare2Objects(object1, object2) { return JSON.stringify(object1) === JSON.stringify(object2); }

// Export a file
export function download(data, filename, type) {
	const file = new Blob([data], { type: type });
	if (window.navigator.msSaveOrOpenBlob) window.navigator.msSaveOrOpenBlob(file, filename);
	else {
		const a = document.createElement("a"),
			url = URL.createObjectURL(file);
		a.href = url;
		a.download = filename;
		document.body.appendChild(a);
		a.click();
		setTimeout(() => {
			document.body.removeChild(a);
			window.URL.revokeObjectURL(url);
		}, 0);
	}
}

/**
 * Get a value from a query parameter from the current URL
 * 
 * @example
 * URL: http://localhost:8080/?name=Silva
 * getUrlParameter("name"); // Silva
 * 
 * @param {string} key 
 * @returns {string} - Returns the value of the key
 */
export function getUrlParameter(key) {
	const urlSearchParams = new URLSearchParams(window.location.search);
	const params = Object.fromEntries(urlSearchParams.entries());
	return params[key];
}


/**
 * Print JavaScript Object In HTML Dom
 * 
 * @example
 * const myObject = {
 * 	name: "Sistema Solar",
 * 	numberStarts: 1,
 * 	terra: {
 * 		speed: 29.783,
 * 		moons: ["Lua"],
 * 		temperature: {
 * 			min: 93.2,
 * 			max: 57.8,
 * 			average: 14,
 * 		}
 * 	},
 * };
 * print(myObject, document.getElementById("myDomElement"));
 * 
 * @param {*} object - JavaScript Object to print in the dom
 * @param {*?} [parent=document.body] - DOM element to print
 * @see {@link -  https://jsfiddle.net/201flaviosilva/mbnz3p7y/}
 */
export function printObjectInDOM(object, parent = document.body) {
	// Function to run Recursively in all proprieties of the object
	function eachRecursive(obj, parentKey = "Object") {
		let html = "";
		html += `<details><summary>${parentKey}</summary><div style="border: 1px solid black;padding: 4px;">`

		for (let key in obj) {
			const validObject = typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key]);
			const validArray = Array.isArray(obj[key]) && obj[key].length > 0;

			if (validObject) html += eachRecursive(obj[key], key);
			else if (validArray) html += eachRecursive(obj[key], key);
			else html += "<li>" + key + ": " + obj[key] + "</li>";
		}

		html += `</div class=""></details>`;
		return html;
	}

	const div = document.createElement("div");
	div.innerHTML = eachRecursive(object, Object.keys({ object })[0]);
	parent.appendChild(div);
}
