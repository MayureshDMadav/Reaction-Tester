var start = new Date().getTime();
var colorArr = ["red", "blue", "green", "yellow", "purple"];
var targertedBox = document.getElementById("box");
var targetedProperty = [
  "top",
  "left",
  "width",
  "height",
  "background-color",
  "display",
];
var randomProperties = new Array();

function randomBoxesHandler() {
  var top;
  var left;
  var width;
  var height;
  var color;
  top = 0;
  left = Math.random() * 300;
  width = Math.floor(Math.random() * 400 + 100);
  height = Math.floor(Math.random() * 400 + 100);
  color = colorArr[Math.floor(Math.random() * 5)];
  randomProperties = [
    top + "px",
    left + "px",
    width + "px",
    height + "px",
    color,
    "block",
  ];

  for (var i = 0; i < randomProperties.length; i++) {
    targertedBox.style[targetedProperty[i]] = randomProperties[i];
  }
  start = new Date().getTime();
}

document.getElementById("box").onclick = function () {
  targertedBox.style.display = "none";
  var endtime = new Date().getTime();
  var totalTime = endtime - start;
  alert(`User Clicked Time: ${totalTime / 1000} seconds`);
  randomBoxesHandler();
};
