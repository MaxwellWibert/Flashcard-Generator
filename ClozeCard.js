var inquirer = require("inquirer");

function ClozeCard(fullText, clozeDeletion){
	this.fullText = fullText.trim();
	this.clozeDeletion = clozeDeletion.trim();
	
	//this chunk of code will put together partial text
	var clozeEx = new RegExp(this.clozeDeletion, 'i');
	//object with property index, set to where match begins in test string
	var clozeMatch = clozeEx.exec(this.fullText);
	var clozeIndex;
	if(clozeMatch){
		clozeIndex = clozeMatch.index;
	}else{
		console.log("error: Cloze Deletion has no match in the full text")
		return;
	}
	var textArray = this.fullText.split("");
	//removes clozeDeletion from text array, replaces with ellipses
	textArray.splice(clozeIndex, this.clozeDeletion.length, ". . .");
	this.partialText = textArray.join("");
	this.prompt = function(callback){
		var that = this;
		var border = "";
		var padding = "";
		var borderLength = that.partialText.length + 8;
		for(var i = 0; i < borderLength; i++){
			border += "+";

			if(i < 2 || i > borderLength - 3){
				padding += "+";
			}else{
				padding += " ";
			}
		}

		console.log(border);
		console.log(border);
		console.log(padding);
		console.log("++  " + that.partialText + "  ++");
		console.log(padding);
		console.log(border);
		console.log(border);

		inquirer.prompt({
			type: "input",
			message: "guess: ",
			name: "guess"
		}).then(function(res){
			let guess = res.guess.trim();
			if(guess === that.clozeDeletion){
				that.correct();
			}else{
				that.incorrect();
			}

			callback();
		});


	}

	//displays when answer is correct
	this.correct = function(){
		let message = "++  Correct!  ++";
		var border = "";
		var padding = "";
		var borderLength = message.length;
		for(var i = 0; i < borderLength; i++){
			border += "+";
			if(i < 2 || i > borderLength - 3){
				padding += "+";
			}else{
				padding += " ";
			}
		}

		console.log(border);
		console.log(border);
		console.log(padding);
		console.log(message);
		console.log(padding);
		console.log(border);
		console.log(border);
	}

	this.incorrect = function(){
		let message = "++  Incorrect! The correct answer was " + this.clozeDeletion + ".  ++";
		var border = "";
		var padding = "";
		var borderLength = message.length;
		for(var i = 0; i < borderLength; i++){
			border += "+";
			if(i < 2 || i > borderLength - 3){
				padding += "+";
			}else{
				padding += " ";
			}
		}

		console.log(border);
		console.log(border);
		console.log(padding);
		console.log(message);
		console.log(padding);
		console.log(border);
		console.log(border);
	}
}

module.exports = ClozeCard;

