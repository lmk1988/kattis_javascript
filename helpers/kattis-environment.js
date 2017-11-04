'use strict';

// Used by solutions running in karma (not node)
// this is a factory function
function kattis() {
  const _testInputArr = [];
  const _testOutput = [];

  readline.and.callFake(() => {
    return _testInputArr.shift();
  });

  print.and.callFake((msg) => {
    if(msg){
      _testOutput.push(''+msg);
    }
  });

  return {
    addInputLine: (input) => {
      if (Array.isArray(input)) {
        _testInputArr.push(...input);
      } else {
        _testInputArr.push(input);
      }
    },
    finalOutput: () => {
      return _testOutput;
    }
  }
};

function SolutionWrapper(solutionFile) {
  if (solutionFile == null) {
    throw new Error("Solution File does not exist")
  }

  //File should contain .Solution and .Test
  if (solutionFile.SolutionID == null ||
    solutionFile.Solution == null ||
    solutionFile.Test == null) {
    throw new Error("Invalid Solution File: " + solutionFile.toString());
  }

  describe(solutionFile.SolutionID, () => {
    let kattis_environment;

    beforeEach(() => {
      kattis_environment = kattis();
    });

    for (var test of solutionFile.Test) {
      it(test.Name, () => {
        if (test.Input.length > 0) {
          kattis_environment.addInputLine(test.Input);
        }

        solutionFile.Solution();

        expect(kattis_environment.finalOutput().toString()).toBe(test.Output.toString());
      });
    }
  });
}