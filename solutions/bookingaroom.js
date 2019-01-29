'use strict';

//https://open.kattis.com/problems/bookingaroom
const SolutionID = "bookingaroom";

const Solution = () => {
  var inputArr = readline().split(' ');
  var totalRooms = parseInt(inputArr[0]);
  var bookedRooms = parseInt(inputArr[1]);
  if(totalRooms == bookedRooms){
    for(var i=0;i<bookedRooms;i++){
      //Consume all lines and print
      readline();
    }
    print('too late');
  }
  else{
    var roomNumberBookedArr = {};
    for(var i=0;i<bookedRooms;i++){
      roomNumberBookedArr[readline()] = true;
    }
    for(var i=1;i<=totalRooms;i++){
      if(roomNumberBookedArr[i.toString()] != true){
        print(i);
        break;
      }
    }
  }
};

const Test = [
  {
    Name: "Sample Input 1",
    Input: [
      '100 5',
      '42',
      '3',
      '2',
      '99',
      '1'
    ],
    Output: [
      '4' //Modified
    ]
  },
  {
    Name: "Sample Input 2",
    Input: [
      '3 3',
      '2',
      '3',
      '1'
    ],
    Output: [
      'too late'
    ]
  }
];

module.exports.SolutionID = SolutionID;
module.exports.Solution = Solution;
module.exports.Test = Test;