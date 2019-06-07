'use strict';

//https://open.kattis.com/problems/filip
const SolutionID = "filip";

const Solution = () => {
  var inputArr = readline().split('').reverse().join('').split(' ');
  var inputA = parseInt(inputArr[0]);
  var inputB = parseInt(inputArr[1]);
  if(inputA<inputB){
    print(inputB);
  }else{
    print(inputA);
  }
};

const Test = [
  {
    Name: "Sample Input 1",
    Input: [
      '734 893'
    ],
    Output: [
      '437'
    ]
  },
  {
    Name: "Sample Input 2",
    Input: [
      '221 231'
    ],
    Output: [
      '132'
    ]
  },
  {
    Name: "Sample Input 3",
    Input: [
      '839 237'
    ],
    Output: [
      '938'
    ]
  }
];

module.exports.SolutionID = SolutionID;
module.exports.Solution = Solution;
module.exports.Test = Test;