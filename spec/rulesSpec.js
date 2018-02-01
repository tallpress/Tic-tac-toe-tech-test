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
    });

    describe("diagonal victory", function(){
      it("should be met if there is a diagonal line of three of a kind", function() {
        var grid = [[" "," "," "],[" "," "," "],[" "," "," "]];
        var rules = new Rules();
        grid[0][0] = "O";
        grid[1][1] = "O";
        grid[2][2] = "O";
        expect(rules.isGameOverdiagonally(grid)).toEqual(true)
      });
      it("should be met if there is a diagonal line of three of a kind", function() {
        var grid = [[" "," "," "],[" "," "," "],[" "," "," "]];
        var rules = new Rules();
        grid[0][2] = "O";
        grid[1][1] = "O";
        grid[2][0] = "O";
        expect(rules.isGameOverdiagonally(grid)).toEqual(true)
      });
      it("should not be met if there is a diagonal line of three of a different kinds", function() {
        var grid = [[" "," "," "],[" "," "," "],[" "," "," "]];
        var rules = new Rules();
        grid[0][0] = "O";
        grid[1][1] = "O";
        grid[2][2] = "X";
        expect(rules.isGameOverdiagonally(grid)).toEqual(false)
      });
    });
  });
});
