
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
const mazeEscapeRoute = function(maze, currentRowIndex = 0, currentColIndex = 0, route = [], lastDirection = '', numOfMovements = 0){
  if (currentColIndex >= maze[0].length || currentRowIndex >= maze.length){
    return;
  }
  
  if (currentColIndex < 0 || currentRowIndex < 0){
    return;
  }
  route[numOfMovements] = lastDirection;
  numOfMovements++;

  if (maze[currentRowIndex][currentColIndex] === 'e'){
    console.log('found the exit:');
    console.log(route.filter(step => step !== ''));
    return ;
  }


  if (maze[currentRowIndex][currentColIndex] === ' '){
    maze[currentRowIndex][currentColIndex] = 'v';
    mazeEscapeRoute(maze, currentRowIndex, currentColIndex - 1, route, 'L', numOfMovements);

    mazeEscapeRoute(maze, currentRowIndex - 1, currentColIndex, route, 'U', numOfMovements);

    mazeEscapeRoute(maze, currentRowIndex, currentColIndex + 1, route, 'R', numOfMovements);

    mazeEscapeRoute(maze, currentRowIndex + 1, currentColIndex, route, 'D', numOfMovements);

    maze[currentRowIndex][currentColIndex] = ' ';
  }

  numOfMovements--;

};


let mazeOne = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

// mazeEscapeRoute(mazeOne);

















const binaryRep = function(num){

  if(num <= 0){
    return '';
  }
  let binary = num % 2;
  return binaryRep(Math.floor(num / 2)) + binary;
};






