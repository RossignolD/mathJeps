let jepsBoard = document.getElementsByClassName("clue");

//   let jackpot = Math.floor(Math.random() * 30);
let jackpot = 24;
function getJackpotEl(number, clues)
{
  return clues[number];
}

let x=getJackpotEl(jackpot, jepsBoard);
console.log(x);

function getIDFromNumber(number) {
  let el = getJackpotEl(number, jepsBoard);
  let myID = el.id;
  return myID;
}

$(document).on("click", function (event) {
  let t = event.target.id;
  let element = document.getElementById(t);
  if (t == jackpot) {
    document.getElementById(t).classList.add("jovialJepsWinner");
    console.log("yay");
  } else {
    console.log("nay");
    return null;
  }
})

document.addEventListener("click", function (e) {
  let elementClass = e.target.className;
  if (elementClass === "clue jovialJepsWinner") {
    window.open("/public_html/jepsJackpot.html");
  }
})
$(document).ready(function(){
  let myID = getIDFromNumber(jackpot, jepsBoard);
  let myEl = document.getElementById(myID);
  console.log(myEl);
  let myWinnerHTML = myEl.outerHTML;
  //  let x = winner.outerHTML;
  console.log(myWinnerHTML);
  let myWinnerURL=myWinnerHTML.slice(63,-40);
  console.log(myWinnerURL);
  return myWinnerURL;
});