let input_sudoku = [
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


//Declaring functions to get rows, columns, squares, checkerboard, print board,


function horizontal(grid, h){
    return grid[h];
}

function vertical(grid,v){

    var col = []
    for(i=0;i<9;i++){
        col[i] = grid[i][0]
    }
    return col;
}

console.log(vertical(input_sudoku,0))


function squareblock(grid,r,c){
    var square_array []

}//pending



