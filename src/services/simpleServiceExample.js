"use strict";

const process = require("node:process");
const path = require("node:path");

const buildExampleGreetingJob = require(path.resolve(process.cwd(), "src", "jobs", "buildExampleGreeting.js"));

module.exports = async function exampleService() {
  const result = await buildExampleGreetingJob();
  return result;
}
