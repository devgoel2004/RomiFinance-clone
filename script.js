var count = 0;
function myFunction() {
  count++;
  var x = document.getElementById("navigation-bar");
  if (x.className === "navigation-content") {
    x.className += "topNav";
  } else {
    x.className = "navigation-content";
  }
  var y = document.getElementById("brand");
  var z = document.getElementById("btn-tags");
  if (count % 2 != 0) {
    y.style.display = "none";
    z.style.display = "none";
  } else {
    y.style.display = "block";
  }
}
