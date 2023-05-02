/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function search(arr, string){
    for(i = 0; i < arr.length; i++){
        if(arr[i].name == string){
            return arr[i];
        }
    }
    return null;
}
search(animals, 'Serpico')
//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(arr, string, replacement){
    for(i = 0; i < arr.length; i++){
        if(arr[i].name == string){
            arr[i] = replacement;
        }
    }
    return null;
}
search(animals, 'Serpico');
console.log(animals);

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(arr, string){
    for(i = 0; i < arr.length; i++){
        if(arr[i].name == string){
            arr.splice(i, 1);
        }
    }
    return null;
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(arr, animal){
        if(animal.name.length > 0 && animal.species.length > 0){
            for(var i = 0; i < arr.length; i++){
                if(arr[i].name === animal.name){
                    return;
                }
              }
              arr.push(animal);
            }
           }



/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
