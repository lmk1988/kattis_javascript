'use strict';

//https://open.kattis.com/problems/carrots
const SolutionID = "carrots";

const Solution = () => {
  var input = readline();
  var splitArr = input.split(' ');
  var count = parseInt(splitArr[0]);
  var carrots = parseInt(splitArr[1]);
  for(var i=0; i<count; i++){
    readline(); //Throw data
  }
  print(carrots);
};

const Test = [
  {
    Name: "Sample Input 1",
    Input: ['2 1', 'carrots?', 'bunnies'],
    Output: ['1']
  },
  {
    Name: "Sample Input 2",
    Input: ['1 5', 'sovl problmz'],
    Output: ['5']
  }
];

module.exports.SolutionID = SolutionID;
module.exports.Solution = Solution;
module.exports.Test = Test;