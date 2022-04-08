const gameBoard = (function () {

    let array = ['X','O','X','O','X','', '', '', ''];


    // show contents of array on the div
    const tiles = document.querySelectorAll('[data-tile-index]');
    tiles.forEach((tile, index) => {
        tile.textContent = `${array[index]}`;
    })
    
    
    



   
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