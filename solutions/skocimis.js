'use strict';

//https://open.kattis.com/problems/skocimis
const SolutionID = "skocimis";

const Solution = () => {
  var inputArr = readline().split(' ');
  var posA = parseInt(inputArr[0]);
  var posB = parseInt(inputArr[1]);
  var posC = parseInt(inputArr[2]);

  var count = 0;
  do
  {
    var spaceAB = posB-posA;
    var spaceBC = posC-posB;

    if(spaceAB == 1 && spaceBC == 1){
      break;
    }else if(spaceAB < spaceBC){
      //The one with smaller space should jump over the middle, to right beside the other kangaroo
      posA = posB;
      posB++;
    }else{
      posC = posB;
      posB--;
    }

    count++;

  }while(true);

  print(''+count);
};

const Test = [
  {
    Name: "Sample Input 1",
    Input: [
      '2 3 5'
    ],
    Output: [
      '1'
    ]
  },
  {
    Name: "Sample Input 2",
    Input: [
      '3 5 9'
    ],
    Output: [
      '3'
    ]
  }
];

module.exports.SolutionID = SolutionID;
module.exports.Solution = Solution;
module.exports.Test = Test;