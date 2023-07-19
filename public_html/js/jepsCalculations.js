let jepsBoard = document.getElementsByClassName("clue");

  let jackpot = Math.floor(Math.random() * 30);
function getJackpotEl(number, clues)
{
  return clues[number];
}

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
    getHyperlink(t);
  } else {
    console.log("nay");
    getHyperlink(t);
    return null;
  }
});

document.addEventListener("click", function (e) {
  let elementClass = e.target.className;
  if (elementClass === "clue jovialJepsWinner") {
    window.open("/public_html/jepsJackpot.html");
  }
});

function countClicks() {
  var $all = $("a");
  $all.click(function() {
      $(this).addClass("clicked");
      let numberClicked = $(".clicked").length;
      console.log(numberClicked);
      return numberClicked
      if(numberClicked=== $all.length) {
         $("#moveToJepsJubilee").show();
      }
      else {$("#moveToJepsJubilee").hide()};
  });
};

countClicks()

function showCategory() {
  var x = document.getElementById("jockeyCategory");
  if (x.style.display === "none") {
    x.style.display = "";
  } else {
    x.style.display = "none";
  }
}

function showClue() {
  var x = document.getElementById("jockeyClue");
  if (x.style.display === "none") {
    x.style.display = "";
  } else {
    x.style.display = "none";
  }
}