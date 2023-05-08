
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
var tri = '#'
function triangles(num)
{
  for(i = 0; i < num; i++){
    console.log(tri);
tri = tri + '#' 
} 
  tri = '#';
}
triangles(9);

////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
for(i = 1; i <= 15; i++){
  if(i % 3 === 0 && i % 5 === 0){
    console.log('fizzbuzz');
  }
  else if(i % 3 === 0){
    console.log('fizz');
  }
  else if(i % 5 === 0){
    console.log('buzz');
  }
  else{
    console.log(i);
  }
}
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(size) {
  var square = "";
  for(var i = 0; i < size; i++){
    for(var j = 0; j < size; j++){
      if((j + i) % 2 == 0){
        square += " ";
      }
      else{
        square += '#';
      }
    }
    square += "\n";
  }
  console.log(square);
  }

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}