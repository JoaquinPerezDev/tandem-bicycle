# tandem-bicycle

ALGO EXPERT EASY 

A tandem bicycle is a bicycle that's operated by two people. Both pedal the 
bicycle, but the person that pedals faster dictates the speed of the bicycle. 
So if person A pedals at a speed of 5, and person B perdals at a speed of 4, the 
tandem bicycle moves at a speed of 5 (i.e., tandemSpeed = max(speedA, speedB)).A

You're given two lists of positive integers: one that contains the speed of riders
wearing red shirts and one with blue shirts. Each rider represented by a single 
positive integer, which is the speed that they pedal a tandem bicycle at. Both lists 
have the same length, meaning that there are as many red-shirt riders as there are
blue-shirt riders to operate a tandem bicycle.

Write a function that returns the maximum possible total speed or the minimum 
possible total speed of all the tandem bibycles being ridden based on an input 
parameter, *fastest*. if *fastest = true*, your funciton should return the maximum 
possible total speed; otherwise it should return the minimum total speed.

"Total speed" is defined as the sum of the speeds of all the tandem bicycles being
ridden. Example: if there are 4 riders(red 2 and 2 blue) who have speeds 
of 1, 3, 4, 5, and if theyre paired as follows: [1, 4], [5, 3], then the total speed
of these tandem bicycles is 4 + 5 = 9.

Sample input: redShirtSpeeds = [5, 5, 3, 9, 2], blueShirtSpeeds = [3, 6, 7, 2, 1], <br>
fastest = true<br>
Sample output: 32
