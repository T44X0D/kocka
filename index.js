var rndom1 = Math.floor((Math.random() * 6) + 1);
document.querySelectorAll("img")[0].setAttribute("src", 'images/dice' + rndom1 + '.png');
var rndom2 = Math.floor((Math.random() * 6) + 1);
document.querySelectorAll("img")[1].setAttribute("src", 'images/dice' + rndom2 + '.png');

if (rndom1 > rndom2){
  document.querySelector("h1").innerHTML = "🚩 1-es játékos Nyert! "
}
else if (rndom1 < rndom2) {
  document.querySelector("h1").innerHTML = "2-es játékos Nyert! 🚩"
}
else {
  document.querySelector("h1").innerHTML = "Döntetlen! 🤨"
}
