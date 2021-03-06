(function(exports){
  function Rules() {
  };

  Rules.prototype.isGameOver = function(grid){
    if (this.isGameOverVertically(grid)) {
      return true;
    } else if (this.isGameOverDiagonally(grid)) {
      return true;
    } else if (this.isGameOverHorizontially(grid)) {
      return true;
    } else {
      return false;
    };
  };

  Rules.prototype.isGameOverHorizontially = function(grid) {
    for (var i = 0; i <= 2; i++) {
      if ((grid[i][0] == grid[i][1]) && (grid[i][1] == grid[i][2])) {
        return true;
      }
    }
    return false;
  };

  Rules.prototype.isGameOverVertically = function(grid) {
    for (var i = 0; i <= 2; i++) {
      if ((grid[0][i] == grid[1][i]) && (grid[1][i] == grid[2][i])) {
        return true;
      }
    }
    return false;
  }

  Rules.prototype.isGameOverDiagonally = function(grid){
    if ((grid[0][0] == grid[1][1]) && (grid[1][1] == grid[2][2])) {
      return true;
    } else if ((grid[0][2] == grid[1][1]) && (grid[1][1] == grid[2][0])) {
      return true;
    } else {
      return false;
    }
  }


  exports.Rules = Rules

})(this);
