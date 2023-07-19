let jepsBoard = document.getElementsByClassName("clue");

let jackpot = Math.floor(Math.random() * 30);

let jovialClicks = new Array(30).fill(0);

function getJackpotEl(number, clues) {
  return clues[number];
}

function getIDFromNumber(number) {
  let el = getJackpotEl(number, jepsBoard);
  let myID = el.id;
  return myID;
}

$(document).on("click", function (event) {
let  t = event.target.id;
  let element = document.getElementById(t);
  if (t == jackpot) {
    document.getElementById(t).classList.add("jovialJepsWinner");
    console.log("yay");
  } else {
    console.log("nay");
    return null;
  }
});

function updateListItem(ID) {
  myList.splice(ID, 1, 1);
  return myList;
};


function replyClick(clicked_id) {
  alert(clicked_id);
  return null;
};

document.addEventListener("click", function (e) {
  let elementClass = e.target.className;
  if (elementClass === "clue jovialJepsWinner") {
    window.open("/public_html/jepsJackpot.html");
  }
});

// function showCategory() {
//   let x = document.getElementById("jockeyCategory");
//   if (x.style.display === "none") {
//     x.style.display = "";
//   } else {
//     x.style.display = "none";
//   }
// }

// function showClue() {
//   let x = document.getElementById("jockeyClue");
//   if (x.style.display === "none") {
//     x.style.display = "";
//   } else {
//     x.style.display = "none";
//   }
// }
