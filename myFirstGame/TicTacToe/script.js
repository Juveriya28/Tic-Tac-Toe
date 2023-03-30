console.log("Welcome to tic tac toe")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let isgameover = false;
const mq = window.matchMedia("(max-width:950px)");
const size = window.innerWidth;
console.log(`width is ${size}`);

//Function to change turn
const changeTurn = ()=>{
    return turn === "X"? "0" :"X"
   

}
 const checkWin = () =>{
    console.log('normal')
    let boxtext = document.getElementsByClassName('boxtext');
        let wins =[
            [0, 1, 2, 5, 5, 0],
        [0, 3, 6, -5 ,15, 90],
        [0, 4, 8, 5, 15, 45],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [3, 4, 5, 5, 15, 0],
        [2, 4, 6, 5, 15, 135],
        [6, 7, 8, 5, 25, 0],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
         document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
         document.querySelector(".line").style.width = '20vw';
        document.querySelector('.info').innerText = boxtext[e[0]].innerText + ' Won';
        isgameover = true
        gameover.play()
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
        
        }
    })
}


//check for win
const checkWin1 = () =>{
    console.log('media')
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 10, 0],//
    [0, 3, 6, -15 ,30, 90],//
    [0, 4, 8, 5, 30, 45],//
    [1, 4, 7, 5, 30, 90],//
    [2, 5, 8, 25, 30, 90],//
    [3, 4, 5, 5, 30, 0],//
    [2, 4, 6, 5, 30, 135],//
    [6, 7, 8, 5, 50, 0],//
        
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + ' Won';
            isgameover = true
            gameover.play()
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
             document.querySelector(".line").style.width = '50vw';
           
        }
    })
  
}
    function applyMediaQuery(event) {
       
        if(window.matchMedia('(max-width: 768px)').matches) {
            checkWin1();
    }
    else{
        checkWin();
    }
    }
    mq.addListener(applyMediaQuery);
    applyMediaQuery(mq);
    
    window.addEventListener(mq,applyMediaQuery);

//Game logic
//     music.play()
let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach(element =>{
    
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === '' && !isgameover){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            //checkWin();
            applyMediaQuery(`${size}`);
            
            
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
            
        }
    })

})

//Adding onclick listener to reset button  //Funtion to play again
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    isgameover = false
    document.querySelector(".line").style.width = '0vw';

    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
    document.querySelector(".line").style.width = '0vw';
    // music.play()

})