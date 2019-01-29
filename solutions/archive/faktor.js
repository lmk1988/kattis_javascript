'use strict';

//https://open.kattis.com/problems/faktor
const SolutionID = "faktor";

const Solution = () => {
  var input = readline();
  var arg = input.split(' ');
  var articlesTotal = parseInt(arg[0]);
  var impact = parseInt(arg[1]);

  for(var result = (articlesTotal * impact)-1; Math.ceil(result/articlesTotal) >= impact; result--){}

  print(++result);
};

const Test = [
  {
    Name: "Sample Input 1",
    Input: ['38 24'],
    Output: ['875']
  },
  {
    Name: "Sample Input 2",
    Input: ['1 100'],
    Output: ['100']
  },
  {
    Name: "Sample Input 3",
    Input: ['10 10'],
    Output: ['91']
  }
];

module.exports.SolutionID = SolutionID;
module.exports.Solution = Solution;
module.exports.Test = Test;