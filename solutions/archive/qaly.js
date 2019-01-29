'use strict';

//https://open.kattis.com/problems/qaly
const SolutionID = "qaly";

const Solution = () => {
  var count = parseInt(readline());
  var total = 0.0;
  for(var i=0;i<count;i++){
    var inputArr = readline().split(' ');
    var q = parseFloat(inputArr[0]);
    var y = parseFloat(inputArr[1]);
    total += (q*y);
  }
  print(total.toFixed(3));
};

const Test = [
  {
    Name: "Sample Input 1",
    Input: [
      '5',
      '1.0 12.0',
      '0.7 5.2',
      '0.9 10.7',
      '0.5 20.4',
      '0.2 30.0'
    ],
    Output: [
      '41.470'
    ]
  }
];

module.exports.SolutionID = SolutionID;
module.exports.Solution = Solution;
module.exports.Test = Test;