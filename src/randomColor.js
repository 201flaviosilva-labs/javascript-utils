import { randomInt } from "./randomNumber.js";

/**
 * Returns a random color hexadecimal
 * 
 * @example
 * randomColor() // '#243ff4'
 * randomColor() // '#64e30f'
 * 
 * @returns {string} a new random color
 */
export function randomColor() { return "#" + (Math.random() * 0xFFFFFF << 0).toString(16); }

/**
 * Returns a random color hexadecimal
 * 
 * @example
 * randomColor0X() // '0x53df30'
 * randomColor0X() // '0x7c2f15'
 * 
 * @returns {string} a new random color
 */
export function randomColor0X() { return `0x${Math.floor(Math.random() * 16777215).toString(16)}`; }


/**
 * Export a random rgb color (red, green, blue)
 * 
 * @example
 * randomRGBColor() // 'rgb(67.77, 251.89, 163.64)'
 * randomRGBColor() // 'rgb(142.84, 37.61, 173.32)'
 * 
 * @returns {string}
 */
export function randomRGBColor() { return `rgb(${randomInt(255)}, ${randomInt(255)}, ${randomInt(255)})`; }

/**
 * Export a random rgba color (red, green, blue, alpha)
 * 
 * @example
 * randomRGBAColor() // 'rgba(73.67, 177.51, 5.37, 0.82158)'
 * randomRGBAColor() // 'rgba(187.17, 195.28, 28.24, 0.73586)'
 * 
 * @returns {string}
 */

export function randomRGBAColor() { return `rgba(${randomInt(255)}, ${randomInt(255)}, ${randomInt(255)}, ${Math.random().toFixed(5)})`; }
