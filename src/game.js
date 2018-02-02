(function(exports){
  function TTT(rules = new Rules()){
    this.grid = [[[],[],[]],[[],[],[]],[[],[],[]]];
    this.turn = "X";
    this.rules = rules
  }


  TTT.prototype.takeTurn = function(x,y) {
    this.isPositionFree(x,y);
    this.grid[x][y] = this.turn;
    this.nextTurn();
  };

  TTT.prototype.isPositionFree = function(x,y) {
    if (this.grid[x][y] == "X" || this.grid[x][y] == "Y") {
      throw new Error("Spot has already been taken");
    };
  };

  TTT.prototype.nextTurn = function() {
    if (this.turn === "X") {
      this.turn = "O";
    } else if (this.turn === "O") {
      this.turn = "X";
    };
  };

  exports.TTT = TTT;

})(this);
