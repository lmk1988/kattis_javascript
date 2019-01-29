'use strict';

//https://open.kattis.com/problems/sibice
const SolutionID = "sibice";

const Solution = () => {
  var inputArr = readline().split(' ');
  var count = parseInt(inputArr[0]);
  var width = parseInt(inputArr[1]);
  var height = parseInt(inputArr[2]);

  var maxLength = Math.pow(width, 2) + Math.pow(height, 2);

  for(var i=0;i<count;i++){
    var length = parseInt(readline());
    if(Math.pow(length, 2) <= maxLength){
      print('DA');
    }else{
      print('NE');
    }
  }
};

const Test = [
  {
    Name: "Sample Input 1",
    Input: [
      '5 3 4',
      '3',
      '4',
      '5',
      '6',
      '7'
    ],
    Output: [
      'DA',
      'DA',
      'DA',
      'NE',
      'NE'
    ]
  },
  {
    Name: "Sample Input 2",
    Input: [
      '2 12 17',
      '21',
      '20'
    ],
    Output: [
      'NE',
      'DA'
    ]
  }
];

module.exports.SolutionID = SolutionID;
module.exports.Solution = Solution;
module.exports.Test = Test;