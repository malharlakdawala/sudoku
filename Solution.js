let input_sudoku = [
    [1, 0, 5, 0, 7, 0, 0, 4, 0],
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


function horizontal(grid, h) {
    return grid[h];
}

function vertical(grid, v) {

    var col = []
    for (i = 0; i < 9; i++) {
        col[i] = grid[i][0]
    }
    return col;
}



var coordinates = [
    [1, 1, 1, 2, 2, 2, 3, 3, 3],
    [1, 1, 1, 2, 2, 2, 3, 3, 3],
    [1, 1, 1, 2, 2, 2, 3, 3, 3],
    [4, 4, 4, 5, 5, 5, 6, 6, 6],
    [4, 4, 4, 5, 5, 5, 6, 6, 6],
    [4, 4, 4, 5, 5, 5, 6, 6, 6],
    [7, 7, 7, 8, 8, 8, 9, 9, 9],
    [7, 7, 7, 8, 8, 8, 9, 9, 9],
    [7, 7, 7, 8, 8, 8, 9, 9, 9]
]



function squareblock(grid, sqr) {
    var square_array = []
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {

            if (sqr == coordinates[r][c]) {

                square_array.push(grid[r][c])
            }
        }
    }

    return square_array;
}

function finish_cell(grid, r, c) {
    let temp = [...horizontal(grid, r), ...vertical(grid, c), ...squareblock(grid, coordinates[r][r])]
    let chances = []

    for (let p = 1; p < 9; p++) {

        if (!temp.includes(p)) {

            chances.push(9)
        }
    }

    if (chances.length == 1) {

        grid[r][c] = temp[0]
        return true
    } else {

        board[r][c] = temp
        return false
    }

}

function check_appears_once(grid, chances, segment, r, c) {

    let updated = false;
    for (i = 0; i < chances.length; i++) {

        let chance = chances[i]
        let count = 0;

        segment.forEach(cell => {

            if (Array.isArray(cell)) {
                if (cell.includes(chance)) {

                    count++;
                }
            } else {
                if (cell == chance) {
                    count++;
                }
            }


        })
        if (count == 1) {

            grid[r][c] = chance
            updated = true
            break
        }

    }

    return updated
}





console.log(squareblock(input_sudoku, 3))