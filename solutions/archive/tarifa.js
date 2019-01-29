'use strict';

//https://open.kattis.com/problems/tarifa
const SolutionID = "tarifa";

const Solution = () => {
  var mbPerMth = parseInt(readline());
  var count =  parseInt(readline());

  var usedTotal = 0;
  for (var i = 0; i < count; i++) {
    usedTotal += parseInt(readline());
  }
  print((mbPerMth*(count+1))-usedTotal);
};

const Test = [
  {
    Name: "Sample Input 1",
    Input: [
      '10',
      '3',
      '4',
      '6',
      '2'
    ],
    Output: ["28"]
  },
  {
    Name: "Sample Input 2",
    Input: [
      '10',
      '3',
      '10',
      '2',
      '12'
    ],
    Output: ["16"]
  },
  {
    Name: "Sample Input 3",
    Input: [
      '15',
      '3',
      '15',
      '10',
      '20'
    ],
    Output: ["15"]
  }
];

module.exports.SolutionID = SolutionID;
module.exports.Solution = Solution;
module.exports.Test = Test;