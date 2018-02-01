describe("Rules", function() {
  describe("winning conditinos", function() {
    describe("horizontal victory", function() {
      it("should be met if any first horizontal array contains three of the same token", function() {
        var grid = [[" "," "," "],[" "," "," "],[" "," "," "]];
        var rules = new Rules();
        grid[0][0] = "X";
        grid[0][1] = "X";
        grid[0][2] = "X";
        expect(rules.isGameOverHorizontially(grid)).toEqual(true);
      });

      it("should not be met if the three in a row do not match", function() {
        var grid = [[" "," "," "],[" "," "," "],[" "," "," "]];
        grid[0][0] = "X";
        grid[0][1] = "O";
        grid[0][2] = "X";
        var rules = new Rules();
        expect(rules.isGameOverHorizontially(grid)).toEqual(true);
      });

      it("should not be met if the three in a row do not match in row 2", function() {
        var grid = [[" "," "," "],[" "," "," "],[" "," "," "]];
        grid[0][2] = "X";
        grid[1][2] = "0";
        grid[2][2] = "X";
        var rules = new Rules();
        expect(rules.isGameOverHorizontially(grid)).toEqual(true);
      });

      it("should be met if the three in a row are in row two", function() {
        var grid = [[" "," "," "],[" "," "," "],[" "," "," "]];
        grid[1][0] = "O";
        grid[1][1] = "O";
        grid[1][2] = "O";
        var rules = new Rules();
        expect(rules.isGameOverHorizontially(grid)).toEqual(true);
      });

      it("should be met if the three in a row are in row three", function() {
        var grid = [[" "," "," "],[" "," "," "],[" "," "," "]];
        grid[2][0] = "X";
        grid[2][1] = "X";
        grid[2][2] = "X";
        var rules = new Rules();
        expect(rules.isGameOverHorizontially(grid)).toEqual(true);
      });
    })

    describe("vertical victory", function(){
      it("should be met if the three in a row are in column one", function() {
        var grid = [[" "," "," "],[" "," "," "],[" "," "," "]];
        grid[0][0] = "O";
        grid[1][0] = "O";
        grid[2][0] = "O";
        var rules = new Rules();
        expect(rules.isGameOverVertically(grid)).toEqual(true);
      });

      it("should be met if the three in a row are in column two", function() {
        var grid = [[" "," "," "],[" "," "," "],[" "," "," "]];
        grid[0][1] = "O";
        grid[1][1] = "O";
        grid[2][1] = "O";
        var rules = new Rules();
        expect(rules.isGameOverVertically(grid)).toEqual(true);
      });

      it("should be met if the three in a row are in column three", function() {
        var grid = [[" "," "," "],[" "," "," "],[" "," "," "]];
        grid[0][2] = "O";
        grid[1][2] = "O";
        grid[2][2] = "O";
        var rules = new Rules();
        expect(rules.isGameOverVertically(grid)).toEqual(true);
      });

      it("should not be met if three diferent in column three", function() {
        var grid = [[" "," "," "],[" "," "," "],[" "," "," "]];
        grid[0][2] = "O";
        grid[1][2] = "X";
        grid[2][2] = "O";
        var rules = new Rules();
        console.log(grid);
        expect(rules.isGameOverVertically(grid)).toEqual(false);
      });
    });

    describe("diagonal victory", function(){
      it("should be met if there is a diagonal line of three of a kind", function() {
        var grid = [[" "," "," "],[" "," "," "],[" "," "," "]];
        var rules = new Rules();
        grid[0][0] = "O";
        grid[1][1] = "O";
        grid[2][2] = "O";
        expect(rules.isGameOverDiagonally(grid)).toEqual(true)
      });

      it("should be met if there is a diagonal line of three of a kind", function() {
        var grid = [[" "," "," "],[" "," "," "],[" "," "," "]];
        var rules = new Rules();
        grid[0][2] = "O";
        grid[1][1] = "O";
        grid[2][0] = "O";
        expect(rules.isGameOverDiagonally(grid)).toEqual(true)
      });

      it("should not be met if there is a diagonal line of three of a different kinds", function() {
        var grid = [[" "," "," "],[" "," "," "],[" "," "," "]];
        var rules = new Rules();
        grid[0][0] = "O";
        grid[1][1] = "O";
        grid[2][2] = "X";
        expect(rules.isGameOverDiagonally(grid)).toEqual(false)
      });
    });

    describe("#checkGameOver", function() {

      it("should check all winning conditions", function() {
        var grid = [[" "," "," "],[" "," "," "],[" "," "," "]];
        var rules = new Rules();
        grid[0][2] = "O";
        grid[1][1] = "O";
        grid[2][0] = "O";
        expect(rules.isGameOver(grid)).toEqual(true)
        var grid1 = [[" "," "," "],[" "," "," "],[" "," "," "]];
        grid1[1][0] = "O";
        grid1[1][1] = "O";
        grid1[1][2] = "O";
        expect(rules.isGameOver(grid1)).toEqual(true);
      });

      it("should return false if winning conditions are not met", function(){
        var grid = [[" "," "," "],[" "," "," "],[" "," "," "]];
        var rules = new Rules();
        grid[0][2] = "X";
        grid[1][2] = "0";
        grid[2][2] = "X";
        expect(rules.isGameOver(grid)).toEqual(false);
      })
    });

  });
});
