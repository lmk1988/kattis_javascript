'use strict';

//https://open.kattis.com/problems/pot
const SolutionID = "pot";

const Solution = () => {
  var count = parseInt(readline());
  var total = 0;
  for (var i = 0; i < count; i++) {
    var current = parseInt(readline());
    total += Math.pow(Math.floor(current / 10), current % 10);
  }
  print(total);
};

const Test = [
  {
    Name: "Sample Input 1",
    Input: [
      '2',
      '212',
      '1253'
    ],
    Output: ["1953566"]
  },
  {
    Name: "Sample Input 2",
    Input: [
      '5',
      '23',
      '17',
      '43',
      '52',
      '22'
    ],
    Output: ["102"]
  }
];

module.exports.SolutionID = SolutionID;
module.exports.Solution = Solution;
module.exports.Test = Test;