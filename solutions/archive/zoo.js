'use strict';

//https://open.kattis.com/problems/zoo
const SolutionID = "zoo";

const Solution = () => {
  var animalList = [];

  do{
    var count = readline();
    if(count == 0){
      break;
    }
    var animals = [];
    for(var i=0; i<count; i++){
      animals.push(readline());
    }
    animalList.push(animals);
  }while(true);

  var listNum = 1;
  animalList.forEach(animals => {
    var animalDict = {};
    animals.forEach(species => {
      var kind = species.split(' ');
      var name = kind.pop().toLowerCase();
      animalDict[name] = animalDict[name]? (animalDict[name]+1) : 1;
    });

    print('List '+ listNum++ +':');
    var animalLines = [];

    for(var name in animalDict){
      animalLines.push(name+' | '+animalDict[name]);
    }

    animalLines.sort((a,b) => {
      return a.localeCompare(b);
    });

    animalLines.forEach(line => {
      print(line);
    });
  });
};

const Test = [
  {
    Name: "Sample Input 1",
    Input: [
      '6',
      'African elephant',
      'White tiger',
      'Indian elephant',
      'Siberian tiger',
      'Tiger',
      'Panda bear',
      '1',
      'Blue Russian Penguin',
      '0'
    ],
    Output: [
      'List 1:',
      'bear | 1',
      'elephant | 2',
      'tiger | 3',
      'List 2:',
      'penguin | 1'
    ]
  }
];

module.exports.SolutionID = SolutionID;
module.exports.Solution = Solution;
module.exports.Test = Test;