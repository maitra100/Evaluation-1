
const {getScore,getBestScore}=require('./ScoreFinder');


describe('Calculate Score',()=>{
	it('should return score when the number of frames in the game is 10',()=>{
		expect(getScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(90);
		expect(getScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10])).toBe(30);
		expect(getScore([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toBe(16);

	});
	it('should return an error when number of frames in a game is less than 10',()=>{
		expect(()=>getScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3])).toThrow('Game Incomplete');
		expect(()=>getScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toThrow('Game Incomplete');
		expect(()=>getScore([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toThrow('Game Incomplete');
	});
});

describe('Calculate Best Score from a set of games',()=>{
	it('should return maximum score when a set of correct games are given',()=>{
		expect(getBestScore([[3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10],[6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]])).toBe(90);
	});
});
