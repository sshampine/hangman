var wordArray = ["puppet", "leef", "puppet", "beer"];
		var randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
		//randomWord = "puppet";
		var blanks = [];
		console.log(randomWord);
		var guessArray = [];
		var loss = 0;
		var win = 0;
		var guessCount = 9;
		var answerArray = [];

		for (var i = 0; i < randomWord.length; i++) {
			blanks[i] = "_";
			answerArray[i] = "_";
		}
		console.log(blanks);

		var wordBlanks = blanks.join(" ");
		document.getElementById("blanks").innerHTML = wordBlanks;
		console.log(wordBlanks);

		document.onkeyup = function(event){

			var userInput = event.key;
			console.log(userInput);
			
		





		if (randomWord.indexOf(userInput) === -1) {
			guessArray.push(userInput);
			var j = guessArray.join(" , ");
			document.getElementById("letter").innerHTML = "Letters guessed: " + j;
			guessCount--;
			document.getElementById("count").innerHTML = guessCount;
			
		}	
		else {
			for (k = 0; k < randomWord.length; k++) {
				if (randomWord[k] === userInput) {
					answerArray[k] = userInput;
					var z = answerArray.join(" ");
					document.getElementById("blanks").innerHTML = z;
					console.log("guesses: " + answerArray);
				}
			}
			console.log(userInput + " is there");
		}

		if (guessCount === 8) {
			document.getElementById("picture").innerHTML = "Bad juju1";
		} else if (guessCount === 7) {
			document.getElementById("picture").innerHTML = 'Bad juju2';
		} else if (guessCount === 6) {
			document.getElementById("picture").innerHTML = 'Bad juju3';
		} else if (guessCount === 5) {
			document.getElementById("picture").innerHTML = 'Bad juju4';
		} else if (guessCount === 4) {
			document.getElementById("picture").innerHTML = 'Bad juju5';
		}	else if (guessCount === 3) {
			document.getElementById("picture").innerHTML = 'Bad juju6';
		} else if (guessCount === 2) {
			document.getElementById("picture").innerHTML = 'Bad juju7';
		}else if (guessCount === 1) {
			document.getElementById("picture").innerHTML = 'Bad juju8';
		}else {
			document.getElementById("picture").innerHTML = '<img src="assets/images/sadface.jpeg">'
			loss++;
			document.getElementById("losses").innerHTML = "Losses: " + loss;
		}



		};