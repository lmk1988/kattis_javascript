'use strict';

//https://open.kattis.com/problems/r2
const SolutionID = "r2";

const Solution = () => {
  var input = readline();
  var arg = input.split(' ');
  var r1 = parseInt(arg[0]);
  var s = parseInt(arg[1]);
  print(s * 2 - r1);
};

const Test = [
  {
    Name: "Sample Input 1",
    Input: ['11 15'],
    Output: ['19']
  },
  {
    Name: "Sample Input 2",
    Input: ['4 3'],
    Output: ['2']
  }
];

module.exports.SolutionID = SolutionID;
module.exports.Solution = Solution;
module.exports.Test = Test;