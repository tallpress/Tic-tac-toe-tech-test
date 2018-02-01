(function(exports){
  function TTT(){
    this.grid = [[" "," "," "],[" "," "," "],[" "," "," "]];
    this.turn = "X";
  }

  TTT.prototype.showGrid = function() {
    return `------------- \n | ${this.grid[0][0]} | ${this.grid[0][1]} | ${this.grid[0][2]} | \n ------------- \n | ${this.grid[1][0]} | ${this.grid[1][1]} | ${this.grid[1][2]} | \n ------------- \n | ${this.grid[2][0]}`+
    ` | ${this.grid[2][1]} | ${this.grid[2][2]} | \n -------------`
  };

  TTT.prototype.takeTurn = function(x,y) {
    this.isPositionFree(x,y);
    this.grid[x][y] = this.turn;
    this.nextTurn();
  };

  TTT.prototype.isPositionFree = function(x,y) {
    if (this.grid[x][y] != " ") {
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

  TTT.prototype.isGameOverHorizontially = function() {
    for (var i = 0; i <= 2; i++) {
      if ((this.grid[i][0] == this.grid[i][1]) && (this.grid[i][1] == this.grid[i][2])) {
        return true;
      };
    };
  };

  TTT.prototype.isGameOverVertically = function() {
    for (var i = 0; i <= 2; i++) {
      if ((this.grid[i][0] == this.grid[i][1]) && (this.grid[i][1] == this.grid[i][2])) {
        return true;
      };
    };
  };


  exports.TTT = TTT;

})(this);
