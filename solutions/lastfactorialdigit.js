'use strict';

//https://open.kattis.com/problems/lastfactorialdigit
const SolutionID = "lastfactorialdigit";

const Solution = () => {
  var count = parseInt(readline());
  for(var i=0;i<count;i++){
    var input = parseInt(readline());
    var result = 1;
    for(var k=2;k<=input;k++){
      result = ((result * k) % 10);
    }
    print(result.toString());
  }
};

const Test = [
  {
    Name: "Sample Input 1",
    Input: [
      '3',
      '1',
      '2',
      '3'
    ],
    Output: [
      '1',
      '2',
      '6'
    ]
  },
  {
    Name: "Sample Input 2",
    Input: [
      '2',
      '5',
      '2'
    ],
    Output: [
      '0',
      '2'
    ]
  }
];

module.exports.SolutionID = SolutionID;
module.exports.Solution = Solution;
module.exports.Test = Test;