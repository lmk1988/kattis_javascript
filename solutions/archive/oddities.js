'use strict';

//https://open.kattis.com/problems/oddities
const SolutionID = "oddities";

const Solution = () => {
  var count = readline();
  var output = [];
  for(var i=0; i<count; i++){
    var input = parseInt(readline());
    if(input%2 == 0){
      output.push(input+" is even");
    }else{
      output.push(input+" is odd");
    }
  }

  for(var i=0; i<output.length; i++){
    print(output[i]);
  }
};

const Test = [
  {
    Name: "Sample Input 1",
    Input: ['3', '10', '9', '-5'],
    Output: ['10 is even', '9 is odd', '-5 is odd']
  }
];

module.exports.SolutionID = SolutionID;
module.exports.Solution = Solution;
module.exports.Test = Test;