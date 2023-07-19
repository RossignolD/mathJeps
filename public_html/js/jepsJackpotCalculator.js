let jepsBoard = document.getElementsByClassName("clue");

  let jackpot = Math.floor(Math.random() * 30);
function getJackpotEl(number, clues)
{
  return clues[number];
};

let x=getJackpotEl(jackpot, jepsBoard);
console.log(x);

function getIDFromNumber(number) {
  let el = getJackpotEl(number, jepsBoard);
  let myID = el.id;
  return myID;
};

$(document).on("click", function (event) {
  let t = event.target.id;
  let element = document.getElementById(t);
  if (t == jackpot) {
    document.getElementById(t).classList.add("jovialJepsWinner");
    console.log("yay");
    getHyperlink(t);
  } else {
    console.log("nay");
    getHyperlink(t)
    return null;
  }
});

document.addEventListener("click", function (e) {
  let elementClass = e.target.className;
  if (elementClass === "clue jovialJepsWinner") {
    window.open("/public_html/jepsJackpot.html");
  }
});

function getHyperlink(ID){
let myLink=myJovialDict[ID];
console.log(myLink);
return myLink;
}
