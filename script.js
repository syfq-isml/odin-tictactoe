const startScreen = document.querySelector('.start-screen');
startScreen.showModal();




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

    return { array, currentPlayer };

})();

let arai = [ [1,2,3], [3,4,5], [6,7,8]];

console.log(arai[0]);
console.log(arai[1][0]);


const game = (function() {

    //check win
        // check array of gameboard
        // if index of 'x' is at 0,1,2, its a win
        // let xIndex =[];

        
        // array.forEach((mark, index) => {
        
        //     if (array[index] === mark) { 

        //     if (xIndex.includes(`${index}`) continue;
        //     xIndex.push('${index}');
        //     }};
    
        //     we sort


        //     xIndex.sort()
        //     let counter;
        //     sortedXIndex.forEach((item, index)=> 

        //         for (let i = 0; i < winning.length; i++) {
        //             for (let j = 0; j < 3; j++) {
        //                 if (sortedXIndex[index] === winning[0][0]) {
        //                 counter++
        //             } else { continue; }
    
        //             if (counter === 3) break;   
        //             }
                        
        //             }
                
            
        //     )
        //     }
        //     if yes 3 times then its a win


        //         if yes then is 

        
            
            
                //map index into another array
        

    let winningIndexArray = []


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