'use strict'

var path = require('path');

var featureExample = require(path.resolve(process.cwd(), "features", "FeatureExample"));

async function ServiceWithSimpleFeature(inputs) {


    //======
    // call the feature
    //=========
    var results =  await featureExample(inputs);

    //======
    // do stuff if needed 
    //=========
    ....

    //======
    // return the result
    //=========
    return results;
  

}

module.exports = ServiceWithSimpleFeature;
