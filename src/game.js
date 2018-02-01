(function(exports){
  function TTT(){
    this.grid = [[null,null,null],[null,null,null],[null,null,null]];
    this.turn = "X";
  }

  TTT.prototype.showGrid = function() {
    return this.grid;
  };

  TTT.prototype.takeTurn = function(x,y) {
    this.isPositionFree(x,y);
    this.grid[x][y] = this.turn;
    this.nextTurn();
  };

  TTT.prototype.isPositionFree = function(x,y) {
    if (this.grid[x][y] != null) {
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
