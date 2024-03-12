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
