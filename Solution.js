let grid = [
    [1, 0, 5, 0, 7, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
]

let variable = 1

for(i=0; i<9; i++)
{
if (grid[0][i] == 0) {

grid[0][i] = variable;
variable++;

//https://github.com/davelms/medium-articles/blob/master/sudoku-solver/sudoku.js
//https://javascript.plainenglish.io/solve-a-sudoku-using-javascript-de456e8c34a5
}
}


console.log(grid[0]);
