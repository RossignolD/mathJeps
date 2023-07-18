let jepsBoard = document.getElementsByClassName('clue');
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
jackpotSquare.classList.add("jovialJepsJackpot");
})

    $(document).click(function(e) {
        if ($(e.target).hasClass('jovialJepsJackpot')) {
          console.log(':)');
          $('.jovialJepsJackpotCover').addClass('jovialJepsJackpotUncover');
        $('.jovialJepsJackpotCover').removeClass('jovialJepsJackpotCover');
        } else {
          console.log('\:\(');
          return null
        }
      });

   
