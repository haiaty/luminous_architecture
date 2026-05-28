"use strict";

const process = require("node:process");
const path = require("node:path");

const executeExampleGreetingOperation = require(path.resolve(process.cwd(), "src", "operations", "executeExampleGreeting.js"));

/**
 * @param {Object} payload
 * @param {string} [payload.name]
 *
 * @return {Promise<Object>}
 */
module.exports = async function (payload) {

    // This service intentionally skips the feature layer and exposes the operation directly.
    return await executeExampleGreetingOperation(payload);

};
