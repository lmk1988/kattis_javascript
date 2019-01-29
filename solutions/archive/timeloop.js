'use strict';

//https://open.kattis.com/problems/timeloop
const SolutionID = "timeloop";

const Solution = () => {
  var count = parseInt(readline());
  for(var i=1;i<=count;i++){
    print(i+' Abracadabra');
  }
};

const Test = [
  {
    Name: "Sample Input 1",
    Input: [
      '5'
    ],
    Output: [
      '1 Abracadabra',
      '2 Abracadabra',
      '3 Abracadabra',
      '4 Abracadabra',
      '5 Abracadabra'
    ]
  },
  {
    Name: "Sample Input 2",
    Input: [
      '10'
    ],
    Output: [
      '1 Abracadabra',
      '2 Abracadabra',
      '3 Abracadabra',
      '4 Abracadabra',
      '5 Abracadabra',
      '6 Abracadabra',
      '7 Abracadabra',
      '8 Abracadabra',
      '9 Abracadabra',
      '10 Abracadabra'
    ]
  }
];

module.exports.SolutionID = SolutionID;
module.exports.Solution = Solution;
module.exports.Test = Test;