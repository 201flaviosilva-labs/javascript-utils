/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "DOM": () => (/* reexport */ DOM_namespaceObject),
  "allCharactersSame": () => (/* reexport */ allCharactersSame),
  "allEqual": () => (/* reexport */ allEqual),
  "and": () => (/* reexport */ and),
  "binary2Decimal": () => (/* reexport */ binary2Decimal),
  "clamp": () => (/* reexport */ clamp),
  "compare2Objects": () => (/* reexport */ compare2Objects),
  "decimal2Binary": () => (/* reexport */ decimal2Binary),
  "degreesToRadians": () => (/* reexport */ degreesToRadians),
  "deleteAllChildDom": () => (/* reexport */ deleteAllChildDom),
  "exportFile": () => (/* reexport */ exportFile),
  "findBigArrObj": () => (/* reexport */ findBigArrObj),
  "findLowArrObj": () => (/* reexport */ findLowArrObj),
  "getDateFormatted": () => (/* reexport */ getDateFormatted),
  "getDay": () => (/* reexport */ getDay),
  "getHours": () => (/* reexport */ getHours),
  "getMaxArrayObjects": () => (/* reexport */ getMaxArrayObjects),
  "getMilliseconds": () => (/* reexport */ getMilliseconds),
  "getMinArrayObjects": () => (/* reexport */ getMinArrayObjects),
  "getMinutes": () => (/* reexport */ getMinutes),
  "getMonth": () => (/* reexport */ getMonth),
  "getSeconds": () => (/* reexport */ getSeconds),
  "getTime": () => (/* reexport */ getTime),
  "getUrlParameter": () => (/* reexport */ getUrlParameter),
  "getWeek": () => (/* reexport */ getWeek),
  "getWeekDay": () => (/* reexport */ getWeekDay),
  "getYear": () => (/* reexport */ getYear),
  "invertedLerp": () => (/* reexport */ invertedLerp),
  "isEven": () => (/* reexport */ isEven),
  "isMultipleOf": () => (/* reexport */ isMultipleOf),
  "isNarcissisticNumber": () => (/* reexport */ isNarcissisticNumber),
  "isOdd": () => (/* reexport */ isOdd),
  "lerp": () => (/* reexport */ lerp),
  "makeNegative": () => (/* reexport */ makeNegative),
  "map": () => (/* reexport */ map),
  "nand": () => (/* reexport */ nand),
  "nor": () => (/* reexport */ nor),
  "not": () => (/* reexport */ not),
  "or": () => (/* reexport */ or),
  "printObjectInDOM": () => (/* reexport */ printObjectInDOM),
  "radiansToDegrees": () => (/* reexport */ radiansToDegrees),
  "randomColor": () => (/* reexport */ randomColor),
  "randomColor0X": () => (/* reexport */ randomColor0X),
  "randomFloat": () => (/* reexport */ randomFloat),
  "randomInt": () => (/* reexport */ randomInt),
  "randomNumber": () => (/* reexport */ randomNumber),
  "randomRGBAColor": () => (/* reexport */ randomRGBAColor),
  "randomRGBColor": () => (/* reexport */ randomRGBColor),
  "range": () => (/* reexport */ range),
  "sortAscending": () => (/* reexport */ sortAscending),
  "sortAscendingObj": () => (/* reexport */ sortAscendingObj),
  "sortDescending": () => (/* reexport */ sortDescending),
  "sortDescendingObj": () => (/* reexport */ sortDescendingObj),
  "xnor": () => (/* reexport */ xnor),
  "xor": () => (/* reexport */ xor)
});

// NAMESPACE OBJECT: ./src/DOM/index.js
var DOM_namespaceObject = {};
__webpack_require__.r(DOM_namespaceObject);
__webpack_require__.d(DOM_namespaceObject, {
  "notification": () => (notification)
});

;// CONCATENATED MODULE: ./src/DOM/Notification.js
const defaultStyle = {
  minWidth: "80%",
  position: "fixed",
  top: "-50px",
  left: "50%",
  zIndex: 1000,
  transform: "translate(-50%, 0)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "4px 10px",
  border: "2px solid #000000",
  borderRadius: "4px",
  backgroundColor: "#f0f0f0",
  boxShadow: "0px 0px 5px 1px rgba(0, 0, 0, 0.75)"
};
const textDefaultStyle = {};
const buttonDefaultStyle = {
  padding: "2px 6px",
  borderRadius: "4px",
  background: "none"
}; // Check: https://developer.mozilla.org/docs/Web/API/Element/animate (Experimental)

/**
 * Display a pop up im the DOM with the given text
 * 
 * @example notification({ text: "notification" });
 * @example
 * notification({
 * 	text: "My nice text",
 * 	animated: false,
 * 	animationTime: 5,
 * 	closeButton: true,
 * 	endPosition: 250,
 * 	style: { border: "10px solid rgb(0, 255, 100)", },
 * 	textStyle: { textTransform: "uppercase", },
 * 	buttonStyle: { backgroundColor: "red" },
 * });
 * 
 * @param {Object} options - The options for the pop up
 * @param {string} options.text - display text in the pop up
 * @param {boolean} options.animated - if the animation should be animated
 * @param {number} options.animationTime - time for the animation
 * @param {boolean} options.closeButton - if the pop up have the button to close or not
 * @param {number} options.endPosition - position to stop the animation (top)
 * @param {Object} options.style - the style for the wrapper
 * @param {Object} options.textStyle - the style for the text (span)
 * @param {Object} options.buttonStyle - the style for the close button
 * @param {HTMLElement} options.parent - parent to create the pop up
 * @returns {void}
 */

function notification({
  text = "",
  animated = true,
  animationTime = 2,
  closeButton = true,
  endPosition = 100,
  style = defaultStyle,
  textStyle = textDefaultStyle,
  buttonStyle = buttonDefaultStyle,
  parent = document.body
}) {
  style = { ...defaultStyle,
    ...style
  };
  textStyle = { ...textDefaultStyle,
    ...textStyle
  };
  buttonStyle = { ...buttonDefaultStyle,
    ...buttonStyle
  };
  let numOfTransitions = 0;

  const _endPosition = endPosition + "px"; // Pop Up


  const popUp = document.createElement("div");
  Object.assign(popUp.style, { ...style
  });
  if (animated) popUp.style.transition = animationTime + "s";else popUp.style.top = _endPosition; // Span

  const popUpSpan = document.createElement("span");
  Object.assign(popUpSpan.style, { ...textStyle
  });
  popUpSpan.innerHTML = text;
  popUp.appendChild(popUpSpan); // Close Button

  if (closeButton) {
    const popUpButton = document.createElement("button");
    Object.assign(popUpButton.style, { ...buttonStyle
    });
    popUpButton.innerHTML = "X";
    popUpButton.addEventListener("click", () => parent.removeChild(popUp));
    popUp.appendChild(popUpButton);
  } // Animation


  if (animated) {
    // Events
    // popUp.addEventListener("transitionstart", () => { console.log("Transition - Start"); });
    popUp.addEventListener("transitionend", () => {
      numOfTransitions++;
      if (numOfTransitions >= 2) parent.removeChild(popUp);
    }); // Timers

    setTimeout(() => {
      popUp.style.top = _endPosition;
    }, 10);
    setTimeout(() => {
      popUp.style.top = "-100px";
    }, (animationTime + 1) * 1000);
  } else {
    setTimeout(() => {
      parent.removeChild(popUp);
    }, (animationTime + 1) * 1000);
  } // Add element


  parent.appendChild(popUp);
}
;// CONCATENATED MODULE: ./src/DOM/index.js


;// CONCATENATED MODULE: ./src/allCharactersSame.js
/**
 * Check if all characters are equal in a string or a array
 * Returns true if all characters are equal. 
 * And false if not.
 * 
 * @example
 * allCharactersSame("beep") // false
 * allCharactersSame("aaaaaaaaaaaa") // true
 * allCharactersSame("b") // true
 * allCharactersSame("") // true
 * 
 * allCharactersSame(["a", "a"]) // true
 * allCharactersSame(["beep", "beep"]) // true
 * allCharactersSame(["a", "b"]) // false
 * 
 * allCharactersSame([1, 1]); // true
 * allCharactersSame([1, 2]); // false
 * 
 * @param {string|Array} string - string to check
 * @returns {boolean}
 */
function allCharactersSame(string) {
  for (let i = 1; i < string.length; i++) {
    if (string[0] != string[i]) return false;
  }

  return true;
}
;// CONCATENATED MODULE: ./src/allEqual.js
/**
 * Check if all Elements of the array are equal
 * 
 * @example
 * allEqual([0,0,0,0]) // true
 * allEqual([0,0,0,1]) // false
 * allEqual([0,"a","a"]) // false
 * allEqual([[1,1],[1,1]]) // true
 * allEqual([[1,1],[1,0]]) // false
 * allEqual([{a:"b",c:1},{a:"b"}]) // false
 * allEqual([{a:"b",c:1},{a:"b",c:1}]) // true
 * allEqual([{a:"b",c:1},{a:"b",c:1},{a:"c",c:1}]) // false
 * allEqual([{a:"b",c:1},{a:"b",c:1},{a:"b",c:1}]) // true
 * 
 * @param {any} arr - the array to check all elements
 * @returns {boolean} true if all elements of the array ara equal
 */
function allEqual(arr) {
  return arr.every(v => JSON.stringify(v) === JSON.stringify(arr[0]));
}
;
;// CONCATENATED MODULE: ./src/and.js
/**
 * Compare if both value are truthy.
 * Return true if the values are truthy.
 * 
 * @example
 * and(false, false); // false
 * and(true, false); // false
 * and(false, true); // false
 * and(true, true); // true
 * 
 * @param {any} value1 - value 1 to compare
 * @param {any} value2 - value 2 to compare
 * @returns {boolean}
 */
function and(value1, value2) {
  return !!value1 && !!value2;
}
;
;// CONCATENATED MODULE: ./src/binary2Decimal.js
/**
 * Convert a number/string to a decimal
 * 
 * @example
 * binary2Decimal(101010); // 42
 * 
 * @param {number|string} binary - the number/string to be converted
 * @returns {number} - conversion decimal
 */
function binary2Decimal(binary) {
  if (typeof binary === "string") return parseInt(binary.split("").reverse().join(""), 2);else if (typeof binary === "number") return parseInt(binary, 2);
}
;// CONCATENATED MODULE: ./src/clamp.js
/**
 * If the value is greater than the maximum, returns the maximum.
 * If the value is less than the minimum, returns the minimum.
 * If not, return the passed value.
 * 
 * @example
 * clamp(-10, 0, 100); // 0
 * clamp(0, 0, 100); // 0
 * clamp(50, 0, 100); // 50
 * clamp(100, 0, 100); // 100
 * clamp(200, 0, 100); // 100
 * 
 * @param {number} value - The value to check
 * @param {number} [min=0] - Minimum value
 * @param {number} [max=1] - Maximum value
 * @returns {number} The fixed value
 */
function clamp(value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}
;// CONCATENATED MODULE: ./src/compare2Objects.js
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
function compare2Objects(object1, object2) {
  return JSON.stringify(object1) === JSON.stringify(object2);
}
;// CONCATENATED MODULE: ./src/decimal2Binary.js
/**
 * Convert a number to a binary
 * 
 * @example
 * decimal2binary(42); // "101010"
 * 
 * @param {number} decimal - the number to be converted
 * @returns {string} - conversion binary string
 */
function decimal2Binary(decimal) {
  return Number(decimal).toString(2);
}
;// CONCATENATED MODULE: ./src/degreesToRadians.js
/**
 * 
 * @example
 * degreesToRadians(0) // 0
 * degreesToRadians(90) // 1.5707963267948966
 * degreesToRadians(500) // 8.726646259971648
 * 
 * @param {number} d - the degrees value to convert in radians
 * @returns {number} converted the given degrees in radian
 */
function degreesToRadians(d) {
  return d * (Math.PI / 180);
}
;// CONCATENATED MODULE: ./src/deleteAllChildDom.js
/**
 * Eliminate all child elements of a choice parent element.
 * For example: delete all dom <li> from a <ul>.
 * 
 * @param {HTMLElement} domElement - The HTML element to exclude all children
 */
function deleteAllChildDom(domElement) {
  while (domElement.hasChildNodes()) domElement.removeChild(domElement.firstChild);

  domElement.innerHTML = "";
}
;// CONCATENATED MODULE: ./src/exportFile.js
/**
 * Create a file and auto downloads the file to user computer
 * 
 * @param {any} data - the content to export
 * @param {string} filename - the name of the exported file
 * @param {string} type - type of the exported file like "txt"
 * @returns {void}
 */
function exportFile(data, filename, type) {
  const file = new Blob([data], {
    type: type
  });
  if (window.navigator.msSaveOrOpenBlob) window.navigator.msSaveOrOpenBlob(file, filename);else {
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
;// CONCATENATED MODULE: ./src/findBigArrObj.js
/**
 * Returns the biggest element from array of objects
 * 
 * @example
 * const myArray = [{a:1, b:100}, {a: 0, b:50}, {a:0, b:200}]
 * findBigArrObj(myArray, "b"); // {a:0, b:200}
 * findBigArrObj(myArray, "a"); // {a:10, b:50}
 * 
 * @param {Object[]} array - The array to search
 * @param {string} prop - The property to find the biggest element
 * @returns {Object} - The biggest element in the array
 */
function findBigArrObj(array, prop) {
  const propValues = array.map(e => e[prop]); // Get a new array only the props

  const minPropValue = Math.max(...propValues); // Try to find the biggest value

  return array.find(e => e[prop] === minPropValue); // Find the biggest in the array
}
;// CONCATENATED MODULE: ./src/findLowArrObj.js
/**
 * Returns the lowest element from array of objects
 * 
 * @example
 * const myArray = [{a:1, b:100}, {a:10, b:50}, {a:0, b:200}]
 * findLowArrObj(myArray, "b"); // {a:10, b:50}
 * findLowArrObj(myArray, "a"); // {a:0, b:200}
 * 
 * @param {Object[]} array - The array to search
 * @param {string} prop - The property to find the lowest element
 * @returns {Object} - The lowest element in the array
 */
function findLowArrObj(array, prop) {
  const propValues = array.map(e => e[prop]); // Get a new array only the props

  const minPropValue = Math.min(...propValues); // Try to find the lowest value

  return array.find(e => e[prop] === minPropValue); // Find the lowest in the array
}
;// CONCATENATED MODULE: ./src/getDate.js
/**
 * Returns the number of milliseconds since midnight Jan 1 1970, and a specified date
 * @see {@link https://www.w3schools.com/jsref/jsref_obj_date.asp}
 * 
 * @example
 * getTime() // 1653573577063
 * 
 * @returns {number}
 */
function getTime() {
  return new Date().getTime();
}
/**
 * Returns the current milliseconds (from 0-999)
 * @see {@link https://www.w3schools.com/jsref/jsref_obj_date.asp}
 * 
 * @example
 * getMilliseconds() // 134
 * getMilliseconds() // 952
 * 
 * @returns {number} current milliseconds
 */

function getMilliseconds() {
  return new Date().getMilliseconds();
}
/**
 * Returns the current seconds (from 0-59)
 * @see {@link https://www.w3schools.com/jsref/jsref_obj_date.asp}
 * 
 * @example
 * getSeconds() // 0
 * getSeconds() // 24
 * 
 * @returns {number} current seconds
 */

function getSeconds() {
  return new Date().getSeconds();
}
/**
 * Returns the current minutes (from 0-59)
 * @see {@link https://www.w3schools.com/jsref/jsref_obj_date.asp}
 * 
 * @example
 * getMinutes() // 0
 * getMinutes() // 24
 * 
 * @returns {number} current minutes
 */

function getMinutes() {
  return new Date().getMinutes();
}
/**
 * Returns the current hour (from 0-23)
 * @see {@link https://www.w3schools.com/jsref/jsref_obj_date.asp}
 * 
 * @example
 * getHours() // 4
 * getHours() // 23
 * 
 * @returns {number} current hours
 */

function getHours() {
  return new Date().getHours();
}
/**
 * Returns the day of the month (from 1-31)
 * @see {@link https://www.w3schools.com/jsref/jsref_obj_date.asp}
 * 
 * @example
 * getDay() // 1
 * getDay() // 23
 * getDay() // 31
 * 
 * @returns {number} current day
 */

function getDay() {
  return new Date().getDate();
}
/**
 * Returns the current day of the week (from 1-7)
 * @see {@link https://www.w3schools.com/jsref/jsref_obj_date.asp}
 * 
 * @example
 * getWeekDay() // 1
 * getWeekDay() // 5
 * getWeekDay() // 7
 * 
 * @returns {number} current day of the week
 */

function getWeekDay() {
  return new Date().getDay() + 1;
}
/**
 * Returns the current week in the year
 * 
 * @example
 * getWeek() // 21
 * getWeek() // 50
 * 
 * @returns {number} current week in the year
 */

function getWeek() {
  const currentDate = new Date();
  const startDate = new Date(currentDate.getFullYear(), 0, 1);
  const days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
  return Math.ceil(days / 7);
}
/**
 * Returns the month (from 1-12)
 * @see {@link https://www.w3schools.com/jsref/jsref_obj_date.asp}
 * 
 * @example
 * getDay() // 1
 * getDay() // 6
 * getDay() // 12
 * 
 * @returns {number} current month
 */

function getMonth() {
  return new Date().getMonth() + 1;
}
/**
 * Returns the year
 * @see {@link https://www.w3schools.com/jsref/jsref_obj_date.asp}
 * 
 * @example
 * getDay() // 1970
 * getDay() // 2000
 * getDay() // 2042
 * 
 * @returns {number} current year
 */

function getYear() {
  return new Date().getFullYear();
}
/**
 * Return a string with a formatted date in Day-Month-Year system
 * 
 * @example
 * getDateFormatted() // "1/1/2021"
 * getDateFormatted() // "26/5/2022"
 * getDateFormatted() // "25/12/2042"
 * 
 * @returns {string}
 */

function getDateFormatted() {
  return getDay() + "/" + getMonth() + "/" + getYear();
}
;// CONCATENATED MODULE: ./src/getMaxArrayObjects.js
/**
 * Returns the biggest value in the array of objects based in the given property
 * 
 * @example
 * const myArray = [{a:1, b:100}, {a:10, b:50}, {a:0, b:200}]
 * getMaxArrayObjects(myArray, "b"); // 200
 * getMaxArrayObjects(myArray, "a"); // 10
 * 
 * @param {Object[]} array - The array to search
 * @param {string} prop - The property to find the biggest element
 * @returns {number} the biggest value in the array based in the given property
 */
function getMaxArrayObjects(arr, prop) {
  return Math.max.apply(Math, arr.map(o => o[prop]));
}
;// CONCATENATED MODULE: ./src/getMinArrayObjects.js
/**
 * Returns the lowest value in the array of objects based in the given property
 * 
 * @example
 * const myArray = [{a:1, b:100}, {a:10, b:50}, {a:0, b:200}]
 * findLowArrObj(myArray, "b"); // 50
 * findLowArrObj(myArray, "a"); // 0
 * 
 * @param {Object[]} array - The array to search
 * @param {string} prop - The property to find the lowest element
 * @returns {number} the lowest value in the array based in the given property
 */
function getMinArrayObjects(arr, prop) {
  return Math.min.apply(Math, arr.map(o => o[prop]));
}
;// CONCATENATED MODULE: ./src/getUrlParameter.js
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
function getUrlParameter(key) {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  return params[key];
}
;// CONCATENATED MODULE: ./src/invertedLerp.js

/**
 * Determines where a value lies between two points.
 * @see {@link https://docs.unity3d.com/ScriptReference/Mathf.InverseLerp.html}
 * 
 * @example
 * invertedLerp(-10, 0, 10); // 0
 * invertedLerp(0, 0, 10); // 0
 * invertedLerp(5, 0, 10); // 0.5
 * invertedLerp(10, 0, 10); // 1
 * invertedLerp(100, 0, 10); // 1
 * 
 * @param {number} value - The point within the range you want to calculate.
 * @param {number} start - The start of the range.
 * @param {number} end - The end of the range.
 * @returns {number} value between 0 and 1, representing where the "value" parameter falls within the range defined by start and end
 */

function invertedLerp(value, start, end) {
  return clamp((value - start) / (end - start));
}
;// CONCATENATED MODULE: ./src/isEven.js
/**
 * Check is the given number is a EVEN number
 * 
 * @example
 * isEven(1); // false
 * isEven(2); // true
 * 
 * @param {number} number - The number to check
 * @returns {boolean}
 */
function isEven(number) {
  return number % 2 == 0;
}
;// CONCATENATED MODULE: ./src/isMultipleOf.js
/**
 * Check is a number is multiple of other
 * 
 * @example
 * isMultipleOf(1, 2); // false
 * isMultipleOf(1, 1); // true
 * isMultipleOf(10, 2); // true
 * isMultipleOf(0, 2); // true
 * isMultipleOf(0, 0); // false
 * isMultipleOf(7, 21); // false
 * isMultipleOf(100, 21); // false
 * isMultipleOf(15, 5); // true
 * isMultipleOf(14, 5); // false
 * 
 * @param {number} dividend - the number check is multiple
 * @param {number} divisor - divisor number
 * @returns {boolean}
 */
function isMultipleOf(dividend, divisor) {
  return dividend % divisor == 0;
}
;// CONCATENATED MODULE: ./src/isNarcissisticNumber.js
/**
 * A Narcissistic Number is a number of length l in which the sum of its digits to the power of l is equal to the original number. If this seems confusing, refer to the example below.
 * 
 * Ex: 153, where l = 3 ( the number of digits in 153 )
 * 13 + 53 + 33 = 153
 * 
 * @see {@link https://en.wikipedia.org/wiki/Narcissistic_number}
 * @see {@link https://www.codewars.com/kata/56b22765e1007b79f2000079/}
 * 
 * @example
 * isNarcissistic(153); // true
 * isNarcissistic(1); // true
 * isNarcissistic(435); // false
 * isNarcissistic(370); // true
 * isNarcissistic(324); // false
 * isNarcissistic(371); // true
 * isNarcissistic(4328); // false
 * isNarcissistic(407); // true
 * isNarcissistic(3248); // false
 * 
 * @param {number} n - number to check if a narcissistic
 * @returns {boolean}
 */
function isNarcissisticNumber(n) {
  const stringN = String(n);
  let sum = 0;

  for (let i = 0; i < stringN.length; i++) {
    sum += Math.pow(stringN[i], stringN.length);
  }

  return sum === n;
}
;// CONCATENATED MODULE: ./src/isOdd.js
/**
 * Check is the given number is a ODD number
 * 
 * @example
 * isOdd(1); // true
 * isOdd(2); // false
 * 
 * @param {number} number - The number to check
 * @returns {boolean}
 */
function isOdd(number) {
  return number % 2 == 1;
}
;// CONCATENATED MODULE: ./src/lerp.js
/**
 * Return the value between 2 value based in a given percentage (decimal midpoint)
 * 
 * @example
 * lerp(0, 0, 100); // 0
 * lerp(0.5, 0, 100); // 50
 * lerp(1, 0, 100); // 100

 * @param {number} value - The value (decimal point)
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} The result of the function
 * @see {@link https://en.wikipedia.org/wiki/Linear_interpolation}
 */
function lerp(value, min, max) {
  return min + (max - min) * value;
}
;// CONCATENATED MODULE: ./src/makeNegative.js
/**
 * Return a negative number based in the given number
 * 
 * @example
 * makeNegative(10) // -10
 * makeNegative(0) // 0
 * makeNegative(-5) // -5
 * 
 * @param {number} number - The number you want to convert
 * @returns {number} - a negative number
 */
function makeNegative(number) {
  return Math.abs(number) * -1;
}
;
;// CONCATENATED MODULE: ./src/map.js
/**
 * Re-maps a number from one range to another
 * @see {@link https://gist.github.com/xposedbones/75ebaef3c10060a3ee3b246166caab56#gistcomment-2951694}
 * 
 * @example
 * //     value, range1, range2
 * // map(value, x1, y1, x2, y2)
 * map(-10, 0, 100, 0, 1000); // -100
 * map(0, 0, 100, 0, 1000); // 0
 * map(10, 0, 100, 0, 1000); // 100
 * map(50, 0, 100, 0, 1000); // 500
 * map(1000, 0, 100, 0, 1000) // 10000
 * 
 * @param {number} value 
 * @param {number} start1 - Start of the range 1
 * @param {number} end1 - End of the range 1
 * @param {number} start2 - Start of the range 2
 * @param {number} end2 - End of the range 2
 * @returns {number} the value un the range
 */
function map(value, start1, end1, start2, end2) {
  return (value - start1) * (end2 - start2) / (end1 - start1) + start2;
}
;// CONCATENATED MODULE: ./src/nand.js

/**
 * Inverse of the "and" function.
 * Compare if one of the value are falsy.
 * Return true if one are falsy.
 * 
 * @example
 * nand(false, false); // true
 * nand(true, false); // true
 * nand(false, true); // true
 * nand(true, true); // false
 * 
 * @param {any} value1 - value 1 to compare
 * @param {any} value2 - value 2 to compare
 * @returns {boolean}
 */

function nand(value1, value2) {
  return !and(value1, value2);
}
;
;// CONCATENATED MODULE: ./src/or.js
/**
 * Compare if one of the value are truthy.
 * Return true if one are truthy.
 * 
 * @example
 * or(false, false); // false
 * or(true, false); // true
 * or(false, true); // true
 * or(true, true); // true
 * 
 * @param {any} value1 - value 1 to compare
 * @param {any} value2 - value 1 to compare
 * @returns {boolean}
 */
function or(value1, value2) {
  return !!value1 || !!value2;
}
;
;// CONCATENATED MODULE: ./src/nor.js

/**
 * Inverse of the "or" function.
 * Compare if both values are falsy.
 * Return true if both are falsy.
 * 
 * @example
 * nor(false, false); // true
 * nor(true, false); // false
 * nor(false, true); // false
 * nor(true, true); // false
 * 
 * @param {any} value1 - value 1 to compare
 * @param {any} value2 - value 2 to compare
 * @returns {boolean}
 */

function nor(value1, value2) {
  return !or(value1, value2);
}
;
;// CONCATENATED MODULE: ./src/not.js
/**
 * Return the boolean inverse of the given value
 * 
 * @example
 * not(true) // false
 * not(false) // true
 * not(0) // true
 * not(1) // false
 * not("") // true
 * not("something") // false
 * not([]) // false
 * not({}) // false
 * 
 * @param {any} value - value to convert in boolean and convert
 * @returns {boolean} converted value
 */
function not(value) {
  return !value;
}
;
;// CONCATENATED MODULE: ./src/printObjectInDOM.js
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
 * printObjectInDOM(myObject, document.getElementById("myDomElement"));
 * 
 * @param {Object} object - JavaScript Object to print in the dom
 * @param {HTMLElement} [parent=document.body] - DOM element to print
 * @see {@link -  https://jsfiddle.net/201flaviosilva/mbnz3p7y/}
 */
function printObjectInDOM(object, parent = document.body) {
  const div = document.createElement("div");
  div.innerHTML = _eachRecursive(object, Object.keys({
    object
  })[0]);
  parent.appendChild(div);
} // Function to run Recursively in all proprieties of the object

function _eachRecursive(obj, parentKey = "Object") {
  let html = "";
  html += `<details><summary>${parentKey}</summary><div style="border: 1px solid black;padding: 4px;">`;

  for (let key in obj) {
    const validObject = typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key]);
    const validArray = Array.isArray(obj[key]) && obj[key].length > 0;
    if (validObject) html += _eachRecursive(obj[key], key);else if (validArray) html += _eachRecursive(obj[key], key);else html += "<li>" + key + ": " + obj[key] + "</li>";
  }

  html += `</div class=""></details>`;
  return html;
}
;// CONCATENATED MODULE: ./src/radiansToDegrees.js
/**
 * Convert the given radians value in degrees
 * 
 * @example
 * radiansToDegrees(1.58) // 57.29577951308232
 * radiansToDegrees(2.5) // 143.2394487827058
 * 
 * @param {number} r - radians value to convert in degrees
 * @returns {number} converted the given radian in degrees
 */
function radiansToDegrees(r) {
  return r * (180 / Math.PI);
}
;// CONCATENATED MODULE: ./src/randomColor.js
/**
 * Returns a random color hexadecimal
 * 
 * @example
 * randomColor() // '#243ff4'
 * randomColor() // '#64e30f'
 * 
 * @returns {string} a new random color
 */
function randomColor() {
  return "#" + (Math.random() * 0xFFFFFF << 0).toString(16);
}
;// CONCATENATED MODULE: ./src/randomColor0X.js
/**
 * Returns a random color hexadecimal
 * 
 * @example
 * randomColor0X() // '0x53df30'
 * randomColor0X() // '0x7c2f15'
 * 
 * @returns {string} a new random color
 */
function randomColor0X() {
  return `0x${Math.floor(Math.random() * 16777215).toString(16)}`;
}
;// CONCATENATED MODULE: ./src/randomFloat.js
/**
 * Return a random float number between the given values and the given precision
 * 
 * @example
 * randomFloat(0, 1);
 * randomFloat(-10, 0, 5);
 * randomFloat(-550, 444);
 * 
 * @param {number} [min=0] - min value
 * @param {number} [max=1] - max value
 * @param {number} [precision=2] - the float precision
 * @returns {number} - random float number
 */
function randomFloat(min = 0, max = 1, precision = 2) {
  if (!max) {
    max = min;
    min = 0;
  }

  return parseFloat((Math.random() * (max - min) + min).toFixed(precision));
}
;// CONCATENATED MODULE: ./src/randomInt.js

/**
 * Return a random integer number between the given values and the given precision
 * 
 * @example
 * randomInt(0, 1);
 * randomInt(-10, 0);
 * randomInt(-550, 444);
 * 
 * @param {number} min - min value
 * @param {number} max - max value
 * @returns {number} - random integer number
 */

function randomInt(min, max) {
  return Math.floor(randomFloat(min, max));
}
;
;// CONCATENATED MODULE: ./src/randomNumber.js

/**
 * Return a random number between the given values and the given precision
 * 
 * @example
 * randomNumber(0, 1);
 * randomNumber(-10, 0, 5);
 * randomNumber(-550, 444);
 * 
 * @param {number} min - min value
 * @param {number} max - max value
 * @returns {number} - random number
 */

function randomNumber(min, max) {
  return randomFloat(min, max);
}
;
;// CONCATENATED MODULE: ./src/randomRGBAColor.js

/**
 * Export a random rgba color (red, green, blue, alpha)
 * 
 * @example
 * randomRGBAColor() // 'rgba(73.67, 177.51, 5.37, 0.82158)'
 * randomRGBAColor() // 'rgba(187.17, 195.28, 28.24, 0.73586)'
 * 
 * @returns {string}
 */

function randomRGBAColor() {
  return `rgba(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)}, ${Math.random().toFixed(5)})`;
}
;// CONCATENATED MODULE: ./src/randomRGBColor.js

/**
 * Export a random rgb color (red, green, blue)
 * 
 * @example
 * randomRGBColor() // 'rgb(67.77, 251.89, 163.64)'
 * randomRGBColor() // 'rgb(142.84, 37.61, 173.32)'
 * 
 * @returns {string}
 */

function randomRGBColor() {
  return `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`;
}
;// CONCATENATED MODULE: ./src/range.js
/**
 * Return a array of number Between the 2 given values,
 * 
 * @example
 * range(1, 5); // [ 1, 2, 3, 4, 5 ]
 * range(0, 100, 10); // [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
 * range(0, 100, 100) // [0, 100]
 * range(1, 100, 100) // [1]
 * 
 * @param {number} start - start point to add numbers
 * @param {number} end - end point to stop adding numbers
 * @param {number} [step=1] - The value to increment
 * @returns {number[]} Array of number
 */
function range(start, end, step = 1) {
  const arr = [];

  for (let i = start; i < end + 1; i += step) arr.push(i);

  return arr;
}
;// CONCATENATED MODULE: ./src/sortAscending.js
/**
 * Sort an array of number by ascending
 * 
 * @example
 * const myArr = [10,4,2,7,1,0,11,4,2,3,5,8,4,3,0,6];
 * const myNewSortedArr = sortAscending(myArr); // [0,0,1,2,2,3,3,4,4,4,5,6,7,8,10,11]
 * 
 * @param {number[]} arr - the array to sort
 * @returns {number[]} A new Array sorted
 */
function sortAscending(arr) {
  return [...arr].sort((a, b) => a - b);
}
;// CONCATENATED MODULE: ./src/sortAscendingObj.js
/**
 * Sort a array of objects in ascending order by property
 * 
 * @param {Array} arr - the array to sort
 * @param {string} prop - the property base to sort
 * @returns {Array} - a new sorted array by the given property
 */
function sortAscendingObj(arr, prop) {
  return [...arr].sort((a, b) => a[prop] - b[prop]);
}
;// CONCATENATED MODULE: ./src/sortDescending.js
/**
 * Sort an array of number by descending
 * 
 * @example
 * const myArr = [10,4,2,7,1,0,11,4,2,3,5,8,4,3,0,6];
 * const myNewSortedArr = sortDescending(myArr); // [11,10,8,7,6,5,4,4,4,3,3,2,2,1,0,0]
 * 
 * @param {number[]} arr - the array to sort
 * @returns {number[]} A new Array sorted
 */
function sortDescending(arr) {
  return [...arr].sort((a, b) => b - a);
}
;// CONCATENATED MODULE: ./src/sortDescendingObj.js
/**
 * Sort a array of objects in descending order by property
 * 
 * @param {*} arr - the array to sort
 * @param {*} prop - the property base to sort
 * @returns {Array} - a new sorted array by the given property
 */
function sortDescendingObj(arr, prop) {
  return [...arr].sort((a, b) => b[prop] - a[prop]);
}
;// CONCATENATED MODULE: ./src/xor.js
/**
 * Return false if both values are truthy ou falsy.
 * 
 * @example
 * xor(false, false); // false
 * xor(true, false); // true
 * xor(false, true); // true
 * xor(true, true); // false
 * 
 * @param {any} value1 - value 1 to compare
 * @param {any} value2 - value 2 to compare
 * @returns {boolean}
 */
function xor(value1, value2) {
  return !!value1 !== !!value2;
}
;
;// CONCATENATED MODULE: ./src/xnor.js

/**
 * Inverse of the "xor" function.
 * Return true if both values are truthy ou falsy.
 * 
 * @example
 * xnor(false, false); // true
 * xnor(true, false); // false
 * xnor(false, true); // false
 * xnor(true, true); // true
 * 
 * @param {any} value1 - value 1 to compare
 * @param {any} value2 - value 2 to compare
 * @returns {boolean}
 */

function xnor(value1, value2) {
  return !xor(value1, value2);
}
;
;// CONCATENATED MODULE: ./src/index.js














































var __webpack_export_target__ = window;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });