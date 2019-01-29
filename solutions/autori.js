'use strict';

//https://open.kattis.com/problems/autori
const SolutionID = "autori";

const Solution = () => {
  var inputArr = readline().split('-');
  var result = '';
  for(var i=0;i<inputArr.length;i++){
    result+= inputArr[i].charAt(0);
  }
  print(result);
};

const Test = [
  {
    Name: "Sample Input 1",
    Input: [
      'Knuth-Morris-Pratt'
    ],
    Output: [
      'KMP'
    ]
  },
  {
    Name: "Sample Input 2",
    Input: [
      'Mirko-Slavko'
    ],
    Output: [
      'MS'
    ]
  },
  {
    Name: "Sample Input 3",
    Input: [
      'Pasko-Patak'
    ],
    Output: [
      'PP'
    ]
  }
];

module.exports.SolutionID = SolutionID;
module.exports.Solution = Solution;
module.exports.Test = Test;