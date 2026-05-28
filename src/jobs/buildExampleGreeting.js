"use strict";

/**
 * @param {Object} payload
 * @param {string} [payload.name]
 *
 * @return {Promise<Object>}
 */
module.exports = async function (payload) {

    // Keep the example deterministic so the service can be called from HTTP, CLI, or tests.
    const name = payload && payload.name ? payload.name : "World";

    return {
        message: `Hello, ${name}!`,
        example: true
    };

};
