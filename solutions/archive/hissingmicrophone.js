'use strict';

//https://open.kattis.com/problems/hissingmicrophone
const SolutionID = "hissingmicrophone";

const Solution = () => {
  var input = readline();
  if(input.indexOf('ss') >= 0){
    print('hiss');
  }else{
    print('no hiss');
  }
};

const Test = [
  {
    Name: "Sample Input 1",
    Input: [
      'amiss'
    ],
    Output: [
      'hiss'
    ]
  },
  {
    Name: "Sample Input 2",
    Input: [
      'octopuses'
    ],
    Output: [
      'no hiss'
    ]
  },
  {
    Name: "Sample Input 3",
    Input: [
      'hiss'
    ],
    Output: [
      'hiss'
    ]
  }
];

module.exports.SolutionID = SolutionID;
module.exports.Solution = Solution;
module.exports.Test = Test;