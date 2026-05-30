'use strict'

var fs = require('fs');
var path = require('path');
var utils = require("util");

var readFile = utils.promisify(fs.readFile);

var OperationExample = require(path.resolve(process.cwd(), "operations", "OperationExample"));

async function FeatureExample(filePath, options) {


    // We assume that the file content is in HEX and not UTF8
    var fileContent = await readFile(filePath, 'hex');

    //======
    // calling an operation and returning its result because we 
    // don't need to do anything else
    //=========
    return  await OperationExample(fileContent, options);

}

module.exports = FeatureExample;
