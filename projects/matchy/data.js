/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = 'cat';
animal.name = 'Serpico';
animal.noises = [];
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = 'hiss'
noises.push('meow');
noises.unshift('purr');
noises[noises.length] = 'scratching post';
console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises)
//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal['noises'] = noises;
animal.noises.push('knocking things over');



/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals = [];
animals.push(animal);
console.log(animals);
var duck = {
  species: 'duck', 
  name: 'Jerome',
  noises: ['quack', 'honk', 'sneeze', 'woosh']
  }
  animals.push(duck);
  console.log(animals)

  var dog = {
    species: 'dog', 
    name: 'Copper',
    noises: ['bark', 'growl', 'sneeze', 'whine']
    }
    animals.push(dog);
    var chicken = {
      species: 'chicken', 
      name: 'Fork',
      noises: ['cluck', 'peck', 'crow']
      }
      animals.push(chicken);

      console.log(animals);
      console.log(animals.length);
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//created variable with friends because it is a list
var friends = [];

function getRandom(){
  var rando;
  rando = Math.floor(Math.random() * animals.length)
  friends.push(animals[rando].name);
  return rando;
}
getRandom(animals[0]);
animals[0].friends = [];
console.log(animals[0]);
console.log(friends);
/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}