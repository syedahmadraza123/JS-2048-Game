document.addEventListener('DOMContentLoaded', () => {
const gridDisplay = document.querySelector('.grid');
const scoreDisplay = document.querySelector('#score');
const resultDisplay = document.querySelector('#result');
const width= 4;
let squares =[];
let score =0;
function createBoard(){
    for(let i =0; i<width*width; i++){
        const square= document.createElement('div');
        square.innerHTML = 0;
        gridDisplay.appendChild(square);
        squares.push(square);
        
    }
    generate();
    generate();
}
createBoard();
    function generate(){
        const randomNumber = Math.floor(Math.random() * squares.length);
        console.log(randomNumber);
        if(squares[randomNumber].innerHTML==0){
            squares[randomNumber].innerHTML=2;
        }else generate();
    }
    function moveRight(){
        for(let i = 0;i<16; i++){
            if(i % 4 === 0){
                let totalOne = squares[i].innerHTML;
                let totalTwo = squares[i+1].innerHTML;
                let totalThree = squares[i+2].innerHTML;
                let totalFour = squares[i+3].innerHTML;
                let row= [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)];
                

                let filteredRow = row.filter(num => num);
                let missing = 4 - filteredRow.length;
                // console.log(filteredRow);
                let zeros = Array(missing).fill(0);
                let newRow = zeros.concat(filteredRow);
                
                squares[i].innerHTML = newRow[0];
                squares[i+1].innerHTML = newRow[1];
                squares[i+2].innerHTML = newRow[2];
                squares[i+3].innerHTML = newRow[3];

            }
        }
    }
    
    function combineRow(){
        for(let i= 0;i<15;i++){
            if(squares[i].innerHTML === squares[i+1].innerHTML){
                let combinedTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i+1].innerHTML);
                squares[i].innerHTML = combinedTotal;
                squares[i+1].innerHTML = 0;
                score += combinedTotal;
                scoreDisplay.innerHTML = score;
            }
        }
    }
    
    function control(e){
        if(e.key === 'ArrowLeft'){
            // keyLeft();
        }else if(e.key === 'ArrowRight'){
            keyRight();
        }
    }
    document.addEventListener('keydown', control);
    // function keyLeft(){
    //     moveLeft();
    //     combineRow();
    //     moveLeft();
    //     generate();
    
    // }

    function keyRight(){
            moveRight();
            combineRow();
            moveRight();
            generate();
        }
})