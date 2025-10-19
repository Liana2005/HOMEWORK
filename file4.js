function islandPerimeter(grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let perimeter = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) {
                perimeter += 4; 

                if (i > 0 && grid[i - 1][j] === 1) perimeter -= 1;
                if (i < rows - 1 && grid[i + 1][j] === 1) perimeter -= 1;
                if (j > 0 && grid[i][j - 1] === 1) perimeter -= 1;
                if (j < cols - 1 && grid[i][j + 1] === 1) perimeter -= 1;
            }
        }
    }

    return perimeter;
}

const grid = [
  [0,1,0,0],
  [1,1,1,0],
  [0,1,0,0],
  [1,1,0,0]
];

console.log(islandPerimeter(grid));
