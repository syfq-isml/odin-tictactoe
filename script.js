
const playerFactory = function(mark) {

    return {mark};
};

const player1 = playerFactory('X');
const player2 = playerFactory('O');

const gameBoard = (function() {

    let array = ['','','','','','', '', '', ''];

    let currentPlayer = player1;
    
    const tiles = document.querySelectorAll('[data-tile-index]');
    
    // show contents of array on the div
    const renderTiles = () => {
        tiles.forEach((tile, index) => {
            tile.textContent = `${array[index]}`;
        });
    ;}

    tiles.forEach((tile, index) => {
        tile.addEventListener('click', () => addMark(currentPlayer.mark,index), {once:true});
    });


    const swapTurn = () => {
        if (currentPlayer === player1)
            currentPlayer = player2;
        else currentPlayer = player1;
    }

    // listen for a click, change array
    const addMark = (mark, index) => {
        console.log(mark);
        console.log(index);
        if (mark === 'X')
            array[index] = 'X';
        else array[index] = 'O';

        renderTiles();
        swapTurn();
        console.log(array);

    };

    

})();




const game = (function() {

    //check win



})();






// create 9 tiles

// create 2 players





/* PLANNING

// update array with an x or o, and display it on dom

// how to check 3 in a row?

// how to 


click a div, return the index of div, store in array



useful stuff:

disable tiles by adding class ".played"

tag Xs and Os to player objects

*/