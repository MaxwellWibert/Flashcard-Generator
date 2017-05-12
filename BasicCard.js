var inquirer = require("inquirer");

function BasicCard(front, back){
	this.front = front.trim();
	this.back = back.trim();
	this.prompt = function(callback){
		var that = this;
		var border = "";
		var padding = "";
		var borderLength = that.front.length + 8;
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
		console.log("++  " + that.front + "  ++");
		console.log(padding);
		console.log(border);
		console.log(border);

		inquirer.prompt({
			type: "input",
			message: "guess: ",
			name: "guess"
		}).then(function(res){
			let guess = res.guess.trim();
			if(guess === that.back){
				that.correct();
			}else{
				that.incorrect();
			}

			callback();
		})
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
		let message = "++  Incorrect! The correct answer was " + this.back + ".  ++";
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


module.exports = BasicCard;
