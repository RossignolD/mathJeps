let jepsBoard = document.getElementsByClassName("clue");

let jackpot = Math.floor(Math.random() * 30);

const jovialClicks = new Array(30).fill(0);
const fullArray = new Array(30).fill(1);

window.onload = function() {
  isArrayFullJovial();  //example function call.
};
function getJackpotEl(number, clues) {
  return clues[number];
}

function getIDFromNumber(number) {
  let el = getJackpotEl(number, jepsBoard);
  let myID = el.id;
  return myID;
}

// $(document).on("click", function (event) {
// let  t = event.target.id;
//   let element = document.getElementById(t);
//   if (t == jackpot) {
//     document.getElementById(t).classList.add("jovialJepsWinner");
//     console.log("yay");
//   } else {
//     console.log("nay");
//     return null;
//   }
// });

function updateListItem(ID) {
  jovialClicks.splice(ID, 1, 1);
  return jovialClicks;
}

function replyClick(clicked_id) {
  alert(clicked_id);
  updateListItem(clicked_id);
  return null;
}

document.addEventListener("click", function (e) {
  let elementClass = e.target.className;
  if (elementClass === "clue jovialJepsWinner") {
    window.open("/public_html/jepsJackpot.html");
  }
});

function compareArraysJovial(a=jovialClicks, b=fullArray){
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);

}

function isArrayFullJovial(){
  if (compareArraysJovial() === true){
    btn= document.getElementById("moveToJepsJubilee")
    return $(btn).show()
  }
  else {
   btn= document.getElementById("moveToJepsJubilee")
   return $(btn).hide()
  };
};