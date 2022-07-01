import pck from "../package.json" assert { type: "json" };

/**
 * @description 
 * Returns the current version of the library
 * 
 * @example
 * getVersion(); // "1.2.4
 * 
 * @returns {String}
 */
export function getVersion() { return pck.version; }
