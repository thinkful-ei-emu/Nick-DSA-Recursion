
//1
const countSheep = function (num){

  if (num === 0){
    console.log('All sheep jumped over the fence');
    return;
  }

  console.log(`${num}: Another sheep jumped over the fence`);
  countSheep(num - 1);
};

//2
const powerCalculator = function (base, exp){

  if(exp === 0){
    return 1;
  }

  if (exp < 0){
    return 'exp should be >= 0';
  }

  return base  *  powerCalculator(base, exp - 1);
};

//3
const reverseString = function(str){

  if (str === ''){
    return '';
  }

  let newString = str.slice(str.length -1);

  return newString + reverseString(str.slice(0, str.length - 1));
};

//4
const nthTriangularNum = function(triNum){

  if (triNum === 1){
    return 1;
  }

  return triNum + nthTriangularNum(triNum - 1);
};


//5
const stringSplitter = function(str, splitter){

  if(!str.includes(splitter)){
    return str;
  }

  let newString = str.replace(splitter, '');

  return stringSplitter(newString, splitter);
};


//6
const fibonacci = function(num, prevNum = 0, prevPrevNum = 0){

  if (num === 0){
    return 0;
  }


  if (prevPrevNum === 0){
    console.log(1);
    prevNum ++;
    num --;
  }

  let currentNum = prevNum + prevPrevNum;


  console.log(currentNum);


  return fibonacci(num -1, currentNum, prevNum);
  
};

//7
const factorial = function(num){

  if (num === 0){
    return 1;
  }

  return num * factorial(num - 1);
};

//8
const mazeEscapeRoute = function(maze, currentRowIndex = 0, currentIndex = 0, route = [], lastDirection = '', numOfMovements = 0){
  if (currentIndex >= maze[0].length || currentRowIndex >= maze.length || currentIndex < 0 || currentRowIndex < 0){
    console.log('invalid position');
    return;
  }
  console.log(lastDirection);
  console.log(route.toString());
  route[numOfMovements] = lastDirection;
  numOfMovements++;

  if (maze[currentRowIndex][currentIndex] === 'e'){
    console.log(route.filter(step => step !== ''));
    console.log('found the exit');
    return ;
  }
  console.log(currentIndex, currentRowIndex);

  if (maze[currentRowIndex][currentIndex] === ' '){
    mazeEscapeRoute(maze, currentRowIndex, currentIndex + 1, route, 'R', numOfMovements);
    mazeEscapeRoute(maze, currentRowIndex + 1, currentIndex, route, 'D', numOfMovements);
  }

  // if (maze[currentIndex][currentIndex] === '*' && route[route.length - 1] === 'R'){
  //   numOfMovements --;
  //   mazeEscapeRoute(maze, currentRowIndex, currentIndex - 1, route, 'L', numOfMovements);
  // }

  // if (maze[currentIndex][currentIndex] === '*' && route[route.length - 1] === 'D'){
  //   numOfMovements --;
  //   mazeEscapeRoute(maze, currentRowIndex - 1, currentIndex, route, 'U', numOfMovements);
  // }

  if (maze[currentRowIndex][currentIndex] === '*'){
    numOfMovements --;
    return;
  }

};


let mazeOne = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

console.log(mazeEscapeRoute(mazeOne));














const binaryRep = function(num){

  if(num <= 0){
    return '';
  }
  let binary = num % 2;
  return binaryRep(Math.floor(num / 2)) + binary;
};






