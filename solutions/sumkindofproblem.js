'use strict';

//https://open.kattis.com/problems/sumkindofproblem
const SolutionID = "sumkindofproblem";

const Solution = () => {
  var count = parseInt(readline());

  for(var i=0;i<count;i++){
    var input = readline().split(' ');
    var val = parseInt(input[1]);

    var oddC = 0;
    var evenC = 0;
    var oddSum = 0;
    var evenSum = 0;
    var sum = 0;

    //Needs to process independently
    for(var k=1;k<=(val*2)+1;k++){
      if(k <= val){
        sum+=k;
      }

      if(k%2 == 1){
        if(oddC < val){
          oddC++;
          oddSum+=k;
        }
      } else {
        if(evenC < val){
          evenC++;
          evenSum+=k;
        }
      }
    }

    print(''+input[0]+' '+sum+' '+oddSum+' '+evenSum);
  }
};

const Test = [
  {
    Name: "Sample Input 1",
    Input: [
      '3',
      '1 1',
      '2 10',
      '3 1001'
    ],
    Output: [
      '1 1 1 2',
      '2 55 100 110',
      '3 501501 1002001 1003002'
    ]
  },
  {
    Name: "Sample Input 2s",
    Input: [
      '3',
      '5 10',
      '1 1',
      '3 1001'
    ],
    Output: [
      '5 55 100 110',
      '1 1 1 2',
      '3 501501 1002001 1003002'
    ]
  }
];

module.exports.SolutionID = SolutionID;
module.exports.Solution = Solution;
module.exports.Test = Test;