export function checkWinner(board) {

    // Проверка по горизонтали и вертикали
    // Выигрыш по горизонтали
    for (let i = 0; i < 3; i++) {
        // Выигрыш по горизонтали
        if (board[i][0] !== 0 && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
            return board[i][0]; 
        }
        // Выигрыш по вертикали
        if (board[0][i] !== 0 && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
            return board[0][i];
        }
    }

    // Проверка по диагонали
    // Выигрыш по диагонали (слева направо)
    if (board[0][0] !== 0 && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        return board[0][0];
    }
    // Выигрыш по диагонали (справа налево)
    if (board[0][2] !== 0 && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        return board[0][2];
    }

    return 0;
}