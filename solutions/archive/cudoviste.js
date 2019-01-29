'use strict';

//https://open.kattis.com/problems/cudoviste
const SolutionID = "cudoviste";

const Solution = () => {
  var BUILDING = '#';
  var PARKED = 'X';

  var input = readline();
  var inputSplit = input.split(' ');
  var rows = parseInt(inputSplit[0]);
  var cols = parseInt(inputSplit[1]);

  var fullMap = [];

  for(var i=0; i<rows; i++){
    var rowMap = readline();
    fullMap.push(rowMap.split(''));
  }

  var isValidSlot = function(r, c){
    return fullMap[r][c] != BUILDING && fullMap[r][c+1] != BUILDING && fullMap[r+1][c] != BUILDING && fullMap[r+1][c+1] != BUILDING;
  }

  var parkSmashCount = function(r, c){
    return ((fullMap[r][c] == PARKED)?1:0) + ((fullMap[r][c+1] == PARKED)?1:0) + ((fullMap[r+1][c] == PARKED)?1:0) + ((fullMap[r+1][c+1] == PARKED)?1:0);
  }

  var smashCount = {0:0, 1:0, 2:0, 3:0, 4:0};

  for(var r=0; r<rows-1; r++){
    for(var c=0; c<cols-1; c++){
      if(isValidSlot(r, c)){
        smashCount[parkSmashCount(r, c)]++;
      }
    }
  }

  for(var i=0; i<5; i++){
    print(''+smashCount[i]);
  }
};

const Test = [
  {
    Name: "Sample Input 1",
    Input: [
      '4 4',
      '#..#',
      '..X.',
      '..X.',
      '#XX#'
    ],
    Output: [
      '1',
      '1',
      '2',
      '1',
      '0'
    ]
  },
  {
    Name: "Sample Input 2",
    Input: [
      '4 4',
      '....',
      '....',
      '....',
      '....'
    ],
    Output: [
      '9',
      '0',
      '0',
      '0',
      '0'
    ]
  },
  {
    Name: "Sample Input 2",
    Input: [
      '4 5',
      '..XX.',
      '.#XX.',
      '..#..',
      '.....'
    ],
    Output: [
      '2',
      '1',
      '1',
      '0',
      '1'
    ]
  }
];

module.exports.SolutionID = SolutionID;
module.exports.Solution = Solution;
module.exports.Test = Test;