number = Math.floor(Math.random()*30)

$(document).ready(function(){
    jepsBoard = document.getElementsByClassName('clue');
    console.log(jepsBoard);
    return(jepsBoard)

});

function tableFlatten(box){
    flatTable=[].concat.apply([], box);
    return flatTable}


$(document).ready(function(){
    flatClues=tableFlatten(jepsBoard);
    console.log(flatClues);

    function getJackpotNumber(no, clues){
        return clues[no]};this
    jackpotSquare=getJackpotNumber(number, flatClues);
    console.log(jackpotSquare)
jackpotSquare.classList.add("jovialJepsJackpot")
})

$(document).click(function(event) {
    var clue = $(event.target).text();
    console.log(clue)
    if(event.target.classList.contains("jovialJepsJackpot")==true){
        $('.jovialJepsJackpotCover').addClass('jovialJepsJackpotUncover');
        $('.jovialJepsJackpotCover').removeClass('jovialJepsJackpotCover');
    }
    else {
        return null
            }
        }
    )


   
