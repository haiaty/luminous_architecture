"use strict";

const process = require("node:process");
const path = require("node:path");

const buildExampleGreetingJob = require(path.resolve(process.cwd(), "src", "jobs", "buildExampleGreeting.js"));

/**
 * @param {Object} payload
 * @param {string} [payload.name]
 *
 * @return {Promise<Object>}
 */
module.exports = async function (payload) {

    // Compose the job result with operation-level metadata for this example flow.
    const result = await buildExampleGreetingJob(payload);

    return {
        ...result,
        from_operation: true
    };

};
