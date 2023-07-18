
// let regex=/'clue'\d\d/

// console.log(matches)

let jepsBoard = document.getElementsByClassName("clue");
    console.log(jepsBoard);

number= Math.floor(Math.random()*30);

function tableFlatten(box){
    flatTable=[].concat.apply([], box);
    return flatTable}

$(document).ready(function(){
    flatClues=tableFlatten(jepsBoard);
    console.log(flatClues);

    function getJackpotNumber(no, clues){
        return flatClues[number]};
    jackpotSquare=getJackpotNumber(flatClues[number], flatClues);
    console.log(jackpotSquare);
jackpotSquare.classList.add("jovialJepsWinner");
})

    $(document).click(function(e) {
        if ($(e.target).hasClass("jovialJepsWinner")){
        console.log(':)');
        jovialJepsJackpotCover.classList.add(jovialJepsJackpotUncover);
        jovialJepsJackpotCover.classList.remove(jovialJepsJackpotCover);
        } 
        else {
          console.log('\:\(');
          return null
        }
      });

   
