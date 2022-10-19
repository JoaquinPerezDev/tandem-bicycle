// A tandem bicycle is a bicycle that's operated by two people. Both pedal the 
// bicycle, but the person that pedals faster dictates the speed of the bicycle. 
// So if person A pedals at a speed of 5, and person B perdals at a speed of 4, the 
// tandem bicycle moves at a speed of 5 (i.e., tandemSpeed = max(speedA, speedB)).A

// You're given two lists of positive integers: one that contains the speed of riders
// wearing red shirts and one with blue shirts. Each rider represented by a single 
// positive integer, which is the speed that they pedal a tandem bicycle at. Both lists 
// have the same length, meaning that there are as many red-shirt riders as there are
// blue-shirt riders to operate a tandem bicycle.

// Write a function that returns the maximum possible total speed or the minimum 
// possible total speed of all the tandem bibycles being ridden based on an input 
// parameter, *fastest*. if *fastest = true*, your funciton should return the maximum 
// possible total speed; otherwise it should return the minimum total speed.

// "Total speed" is defined as the sum of the speeds of all the tandem bicycles being
// ridden. Example: if there are 4 riders(red 2 and 2 blue) who have speeds 
// of 1, 3, 4, 5, and if theyre paired as follows: [1, 4], [5, 3], then the total speed
// of these tandem bicycles is 4 + 5 = 9.

// Sample input: redShirtSpeeds = [5, 5, 3, 9, 2], blueShirtSpeeds = [3, 6, 7, 2, 1], 
// fastest = true
// Sample output: 32

//naive approach: Double looping and finding all possible combination of tandem 
// bicycle riders is definitely a possibility. However, this approach will be much 
// slower than what is possible. Instead, we can use conditional statements to check
// the value of *fastest* in order to pair up each value at each index in the arrays. 
// If fastest is true, we can sort the redShirts in descending order and the blueShirts
// in ascending order. This will allow us to find the max speed, when we loop through
// to compare the values at each index of the arrays. If fastest is false, we want to 
// still sort redShirts in descending order but now we want to sort the blueShirts
// also in descending order. We can then loop through and find the minimum speed, 
// given that we will compare the fastest riders at the end of the arrays.   


//O(nLog(n)) time | O(1) space complexity


function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  // Write your code here.
  redShirtSpeeds.sort((a, b) => b - a);
  blueShirtSpeeds.sort((a, b) => fastest ? a - b : b - a);
  
  let result = 0;
  
  for(let i = 0; i < redShirtSpeeds.length; i++) {
    result += Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]);
  }
  return result;
}


