// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   let word = input.question("Let's play some scrabble! Enter a word:");
   return word;
};

let simpleScorer = (word) => {
   let points = word.length; 
   // let letterPoints = `Points for '${word}': ${points}\n`;
   // return letterPoints;
   return points;
};
//not returning 3 pts for vowels
let vowelBonusScorer = (word) => {
   let finalScore = 0;
   word = word.split('');
   let vowels = ['a','e','i','o','u'];
   let vowelPoints = 3;
   let letterPoints =  1;
   word.forEach(letter => {
      if (vowels.includes(letter)) {
         finalScore += vowelPoints;
      } else {
         finalScore += letterPoints;
      }
   })
   return finalScore;
}
   // let letterPoints = `Points for '${word}': ${points}\n`;
   // return letterPoints; 


let scrabbleScorer;
//objects
simple = {
  
   scorerFunction: simpleScorer
};
vowel = {
  
   scorerFunction: vowelBonusScorer
};
scrabble = {
  
   scorerFunction: oldScrabbleScorer
};

const scoringAlgorithms = [ simple , vowel , scrabble ];

function scorerPrompt() { 
   let scorer = input.question(`Which scoring algorithm would you like to use? \n 
   0 - Simple: One point per character\n
   1 - Vowel Bonus: Vowels are worth 3 points\n
   2 - Scrabble: Uses scrabble point system')\n
   Enter 0, 1, or 2:`);
   if (scorer === 0) {
     return scoringAlgorithms[0].scorerFunction;
   } else if (scorer === 1) {
      return scoringAlgorithms[1].scorerFunction;
   } else if (scorer === 2) {
     return scoringAlgorithms[2].scorerFunction;
   }
};

function transform() {};

let newPointStructure;

function runProgram() {
   initialPrompt();
   scorerPrompt();
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
