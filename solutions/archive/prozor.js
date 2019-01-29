'use strict';

//https://open.kattis.com/problems/prozor
const SolutionID = "prozor";

const Solution = () => {
  var inputArr = readline().split(' ');
  var height = parseInt(inputArr[0]);
  var width = parseInt(inputArr[1]);
  var racket = parseInt(inputArr[2]);
  var racketM1 = racket-1;

  var inputMap = [];
  for(var i=0;i<height;i++){
    inputMap[i] = readline().split('');
  }

  var mostKill = 0;
  var tx = 0;
  var ty = 0;

  //Find highest kill
  for(var y=0;y<(height-racketM1);y++){
    for(var x=0;x<(width-racketM1);x++){
      var kills = 0;
      for(var sy=1;sy<racketM1;sy++){
        for(var sx=1;sx<racketM1;sx++){
          if(inputMap[y+sy][x+sx] == '*'){
            kills++;
          }
        }
      }

      if(kills > mostKill){
        mostKill = kills;
        tx = x;
        ty = y;
      }
    }
  }

  //Modify map
  //top and last line
  for(var y=0;y<2;y++){

    var posY = ty+y*racketM1;
    //Left end
    inputMap[posY][tx] = '+';

    for(var x=1;x<racketM1;x++){
      inputMap[posY][tx+x] = '-';
    }

    //Right end
    inputMap[posY][tx+racketM1] = '+';
  }

  //Side lines
  for(var y=1;y<racketM1;y++){
    var posY = ty+y;
    inputMap[posY][tx] = '|';
    inputMap[posY][tx+racketM1] = '|';
  }

  print(''+mostKill);
  for(var i=0;i<height;i++){
    var line = ''
    for(var k=0;k<width;k++){
      line += inputMap[i][k];
    }
    print(line);
  }
};

const Test = [
  {
    Name: "Sample Input 1",
    Input: [
      '3 5 3',
      '.....',
      '.*.*.',
      '.....',
    ],
    Output: [
      '1',
      '+-+..',
      '|*|*.',
      '+-+..',
    ]
  },
  {
    Name: "Sample Input 2",
    Input: [
      '7 6 4',
      '......',
      '.*.*.*',
      '......',
      '.*.*..',
      '..*...',
      '..*...',
      '*....*'
    ],
    Output: [
      '2',
      '......',
      '.*.*.*',
      '+--+..',
      '|*.|..',
      '|.*|..',
      '+--+..',
      '*....*'
    ]
  },
  {
    Name: "Sample Input 3",
    Input: [
      '9 9 6',
      '***......',
      '......*.*',
      '.*....*..',
      '..*...*..',
      '..*.*....',
      '..*....*.',
      '.....*...',
      '.*...***.',
      '.........'
    ],
    Output: [
      '6',
      '***......',
      '......*.*',
      '.*....*..',
      '..*+----+',
      '..*|*...|',
      '..*|...*|',
      '...|.*..|',
      '.*.|.***|',
      '...+----+'
    ]
  }
];

module.exports.SolutionID = SolutionID;
module.exports.Solution = Solution;
module.exports.Test = Test;