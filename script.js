const toggleButton = document.getElementById("toggleButton");
const collapsibleParagraph = document.getElementById("collapsibleParagraph");

toggleButton.addEventListener("click", function () {
  if (collapsibleParagraph.style.maxHeight) {
    collapsibleParagraph.style.maxHeight = null; // remove height restriction
  } else {
    collapsibleParagraph.style.maxHeight =
      collapsibleParagraph.scrollHeight + "px"; // expand to full height
  }
});

///////////////////////////////////////////////////

setTimeout(function () {
  const hideOverlay = sessionStorage.getItem("hideOverlay");
  if (hideOverlay !== "true") {
    document.getElementById("on-load-overlay").style.display = "block";
  }
}, 0);

setTimeout(function () {
  const hideOverlay = sessionStorage.getItem("hideOverlay");
  if (hideOverlay !== "true") {
    document.getElementById("on-load-greeting").style.display = "block";
  }
}, 2000);

window.onclick = off;

function off() {
  document.getElementById("on-load-overlay").style.display = "none";
  sessionStorage.setItem("hideOverlay", "true");
}
