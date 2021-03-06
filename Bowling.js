function sum(a, b){
	return a+b;
}

var Bowling = (function () {
	var Game = function(){
		var max = 40;
		var rolls = []; rolls.length = max; rolls.fill(0);
		var current_roll = 0;

		this.roll = function(pins){
			rolls[current_roll] = pins;
			current_roll += 1;
		}

		this.score = function(){
			var score = 0; 
			for (var i = 0; i < rolls.length/2; i+=2){
				var frame = [rolls[i], rolls[i+1]];
				
				//strike
				if (rolls[i] == 10){
					if (i < 10){
						score += (10  + rolls[i+1] + rolls[i+2]);
						i--;
					}
				}
				
				//spare
				else if (frame.reduce(sum) == 10){
					score += (10 + rolls[i+2]);
				}
				
				else {
					score += (rolls[i] + rolls[i+1]);
				}
			}
			
			return score;
		}
		
		this.roll_n_times = function(pins, n){
			for (var i = 0; i < n; i++){
				this.roll(pins);
			}
		}
	}
	
	return {
		Game: Game
	};
})();	

module.exports = Bowling;
