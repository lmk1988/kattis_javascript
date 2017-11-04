'use strict';

//https://open.kattis.com/problems/hello
const SolutionID = "hello";

const Solution = () => {
  print("Hello World!");
};

const Test = [{
  Name: "Sample Input 1",
  Input: [],
  Output: ["Hello World!"]
}];

module.exports.SolutionID = SolutionID;
module.exports.Solution = Solution;
module.exports.Test = Test;