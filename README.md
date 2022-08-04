3. Filter filters the array i.e. provides an output with a subset of array. It filters according to the condition we return inside its closure function.
example: 
let array = [10,10,20]
let newArray = array.filter(a=>a===10) //returns [10,10] i.e newArray = [10,10]

Map modified the array i.e it mutates the inside data and changes it/ modifies it according to the condition we provide inside its closure function
example: 
let array = [10,10,20]
let newArray = array.map(a=>a*2) // returns [20,20,40] i.e. newArray=[20,20,40]

In map, the output has length similar to input, in filter the output has length <= length of input

5. I struggle with design part i.e. styling part of creating a frontend application. It usually takes me lots of time for this.
