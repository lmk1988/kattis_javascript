'use strict';

//https://open.kattis.com/problems/cold
const SolutionID = "cold";

const Solution = () => {
  readline(); //Ignore first line
  var input = readline();
  //Actually we should just return number of "-" negative symbol but I am afraid they will have -0
  var splitArr = input.split(' ');
  var count = 0;
  for(var i=0; i< splitArr.length; i++){
    if(parseInt(splitArr[i]) < 0){
      count++;
    }
  }

  print(count);
};

const Test = [
  {
    Name: "Sample Input 1",
    Input: ['3', '5 -10 15'],
    Output: ['1']
  },
  {
    Name: "Sample Input 2",
    Input: ['5', '-14 -5 -39 -5 -7'],
    Output: ['5']
  }
];

module.exports.SolutionID = SolutionID;
module.exports.Solution = Solution;
module.exports.Test = Test;