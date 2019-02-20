var Bowling = require("../Bowling");



describe("Game instantiation", function() {
	it("game should be real", function() {
		expect(new Bowling.Game).not.toEqual(undefined);
	});

	it("Gutter game should be zero", function() {
		var g = new Bowling.Game;
		g.roll_n_times(0, 20)
		expect(g.score()).toEqual(0);
	});
	
	it("All ones should equal 20", function() {
		var g = new Bowling.Game;
		g.roll_n_times(1, 20);
		expect(g.score()).toEqual(20);
	});

	it("A spare + 3 pins, + all misses scores 24 ", function() {
		var g = new Bowling.Game;
		expect(g.score()).toEqual(24);
	});

});

