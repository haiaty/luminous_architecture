
"use strict";

const process = require("node:process");
const path = require("node:path");

const simpleServiceExample = require(path.resolve(process.cwd(), "src", "services", "simpleServiceExample.js"));
const serviceWithoutFeaturesExample = require(path.resolve(process.cwd(), "src", "services", "serviceWithoutFeaturesExample.js"));



async function main() {

    let result = null;

    // Execute the service from the application boundary without leaking CLI details into /src.
    result = await simpleServiceExample();
    console.log(JSON.stringify(result, null, 2));

    result = await serviceWithoutFeaturesExample();
    console.log(JSON.stringify(result, null, 2));



}

/**
 * Handle any uncaught errors from the main function and 
 * log them in a consistent format.
 */
main().catch(function (error) {

    console.error(JSON.stringify({
        status: "ERROR",
        message: error.message
    }, null, 2));

    process.exit(1);

});
