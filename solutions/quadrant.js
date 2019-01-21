'use strict';

//https://open.kattis.com/problems/quadrant
const SolutionID = "quadrant";

const Solution = () => {
  var x = readline();
  var y = readline();
  if(x < 0){
    if(y < 0){
      print(3);
    }else{
      print(2);
    }
  }else{
    if(y < 0){
      print(4);
    }else{
      print(1);
    }
  }
};

const Test = [
  {
    Name: "Sample Input 1",
    Input: ['10', '6'],
    Output: ['1']
  },
  {
    Name: "Sample Input 2",
    Input: ['9', '-13'],
    Output: ['4']
  }
];

module.exports.SolutionID = SolutionID;
module.exports.Solution = Solution;
module.exports.Test = Test;