let jepsBoard = document.getElementsByClassName("clue");

// let jovialJackpot = Math.floor(Math.random() * 30);

// function jubileeJackpots() {
//   const myList = [];
//   while (myList.length < 2) {
//     myList.push(Math.floor(Math.random() * 30));
//   }
//   return myList;
// }

// let myJubileeJackpots = jubileeJackpots();

// function isJovialJackpot(clicked_id) {
//   if (clicked_id === jovialJackpot) {
//     window.open("../public_html/jepsJackpot.html");
//   } else {
//     window.open(getURL(clicked_id));
//   }
// }

// function getURL(clicked_id) {
//   let myID = getIDFromNumber(clicked_id);
//   let myEl = document.getElementById(clicked_id);
//   let myWinnerHTML = myEl.outerHTML;
//   console.log(myWinnerHTML);
//   let myWinnerURL = myWinnerHTML.slice(63, -40);
//   console.log(myWinnerURL);
//   return myWinnerURL;
// }

const jovialClicks = new Array(30).fill(0);
const fullArray = new Array(30).fill(1);
const jubileeClicks = new Array(30).fill(0);

function getJackpotEl(number, clues) {
  return clues[number];
}

function getIDFromNumber(number) {
  let el = getJackpotEl(number, jepsBoard);
  let myID = el.id;
  return myID;
}

function updateListItemJovial(ID) {
  jovialClicks.splice(ID, 1, 1);
  return jovialClicks;
}

function updateListItemJubilee(ID) {
  jubileeClicks.splice(ID, 1, 1);
  return jubileeClicks;
}

function replyClickJovial(clicked_id) {
  updateListItemJovial(clicked_id);
  return null;
}

function replyClickJubilee(clicked_id) {
  updateListItemJubilee(clicked_id);
  return null;
}

document.addEventListener("click", function (e) {
  let elementClass = e.target.className;
  if (elementClass === "clue jovialJepsWinner") {
    window.open("/public_html/jepsJackpot.html");
  }
});

function compareArraysJovial(a = jovialClicks, b = fullArray) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

function isArrayFullJovial() {
  if (compareArraysJovial() === true) {
    let btn = document.getElementById("moveToJepsJubilee");
    $(btn).show();
    return true;
  } else {
   let  btn = document.getElementById("moveToJepsJubilee");
    $(btn).hide();
    return false;
  }
}

function compareArraysJubilee(a = jubileeClicks, b = fullArray) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

function isArrayFullJubilee() {
  if (compareArraysJubilee() === true) {
    let btn = document.getElementById("moveToJepsJockey");
    $(btn).show();
    return true;
  } else {
    let btn = document.getElementById("moveToJepsJockey");
    $(btn).hide();
    return false;
  }
}