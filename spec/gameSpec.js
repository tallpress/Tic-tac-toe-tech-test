describe("Game", function() {
  var game;
  beforeEach(function() {
    game= new TTT();
  });

  it("should be able to initialize the game with a grid", function() {
    expect(game.grid).toEqual([[[],[],[]],[[],[],[]],[[],[],[]]]);
  });

  it("should be able to place a X on specified spot", function() {
    game.takeTurn(0,1);
    expect(game.grid[0][1]).toEqual("X");
  });

  it("should not be able to take a place that already has been taken", function() {
    game.takeTurn(1,1);
    expect(function(){ game.takeTurn(1,1); }).toThrowError("Spot has already been taken");
  });

  it("should take alternate turns between O and X", function() {
    game.takeTurn(1,2);
    game.takeTurn(1,0);
    expect(game.grid[1][2]).toEqual("X");
    expect(game.grid[1][0]).toEqual("O");
  })
});
