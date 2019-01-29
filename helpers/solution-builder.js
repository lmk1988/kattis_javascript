const fs = require('fs');
const glob = require('glob-fs')({
  gitignore: true
});

const KATTIS_CONFIG = ".kattis.conf.js";
const os = require("os");

function Build(solution) {
  //Delete previous config
  if (fs.existsSync(KATTIS_CONFIG) && !fs.statSync(KATTIS_CONFIG).isFile()) {
    fs.unlinkSync(KATTIS_CONFIG);
  }

  if (solution == null || typeof solution !== 'string') {
    throw new Error("Invalid --solution parameter");
  }
  
  let files;
  let solutionPath = './solutions/' + solution + '.js';
  
  if(solution == '*' || solution == '**/*' || solution == 'archive/*') {
	files = glob.readdirSync(solutionPath, {});
  } else {
	if (!fs.existsSync(solutionPath)) {
		throw new Error("Solution '" + solution + "' does not exist as " + solutionPath);
	}
	files = [solutionPath];
  }

  console.log(files);

  let KATTIS_TEST = '[' + os.EOL;
  //Cannot use stringify to copy data as function is not copied, have to manually do it
  for (var testFile of files) {
    var testModule = require('../' + testFile);
    KATTIS_TEST += '{' + os.EOL;
    KATTIS_TEST += '"SolutionID": "' + testModule.SolutionID + '",' + os.EOL;
    KATTIS_TEST += '"Test": ' + JSON.stringify(testModule.Test) + ',' + os.EOL;
    KATTIS_TEST += '"Solution": ' + testModule.Solution.toString() + os.EOL;
    KATTIS_TEST += '},' + os.EOL;
  }
  KATTIS_TEST += ']' + os.EOL;

  fs.writeFileSync(KATTIS_CONFIG,
    '"use_strict";' + os.EOL +
    '//This is an auto generated file, do not modify' + os.EOL +
    'var KATTIS_TEST = ' + KATTIS_TEST + ';' + os.EOL +
    'for(var test of KATTIS_TEST){ SolutionWrapper(test); }'
  );
}

module.exports.Build = Build;