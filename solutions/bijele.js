'use strict';

//https://open.kattis.com/problems/bijele
const SolutionID = "bijele";

const Solution = () => {
  var inputArr = readline().split(' ');
  var king = 1 - parseInt(inputArr[0]);
  var queen = 1 - parseInt(inputArr[1]);
  var rooks = 2 - parseInt(inputArr[2]);
  var bishops = 2 - parseInt(inputArr[3]);
  var knights = 2 - parseInt(inputArr[4]);
  var pawns = 8 - parseInt(inputArr[5]);

  print(king + ' ' + queen + ' ' + rooks + ' ' + bishops + ' ' + knights + ' ' + pawns);
};

const Test = [
  {
    Name: "Sample Input 1",
    Input: [
      '0 1 2 2 2 7'
    ],
    Output: [
      '1 0 0 0 0 1'
    ]
  },
  {
    Name: "Sample Input 2",
    Input: [
      '2 1 2 1 2 1'
    ],
    Output: [
      '-1 0 0 1 0 7'
    ]
  }
];

module.exports.SolutionID = SolutionID;
module.exports.Solution = Solution;
module.exports.Test = Test;