const pageLoad = () => {
 
  let array1 = [1, "kettő", true, false, ["kistömb", 3, true]];

  console.log(array1);

  // Add / remove items to array, changes original array
  // array.splice(index, howmany, item1, ....., itemX)
    // index: required (+ position elölről számolva, - hátulról számolva)
    // howmany: 
  array1.splice(1, 0, "added");

  // Return Value:	A new Array, containing the removed items (if any)

  console.log(array1.splice(1, 0, "added"));

  
  // megnézni
  /*
  const rootE = document.getElementById("white");
  rootE = document.getElementById("otherWhite");
  console.log(rootE);
  */


}
window.addEventListener("load", pageLoad);