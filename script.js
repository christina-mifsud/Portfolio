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

// on-load overlay

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

// mouse pointer animation - following tutorial found here: https://www.youtube.com/watch?v=7eE8xPyXSR4

const coords = { x: 0, y: 0 };
const squares = document.querySelectorAll(".mouse-square");

const colors = ["#f2511b"];

squares.forEach(function (square, index) {
  square.x = 0;
  square.y = 0;
  square.style.backgroundColor = colors;
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateSquares() {
  let x = coords.x;
  let y = coords.y;

  squares.forEach(function (square, index) {
    square.style.left = x - 12 + "px";
    square.style.top = y - 12 + "px";

    square.style.scale = (squares.length - index) / squares.length;

    square.x = x;
    square.y = y;

    const nextSquare = squares[index + 1] || squares[0];
    x += (nextSquare.x - x) * 0.3;
    y += (nextSquare.y - y) * 0.3;
  });

  requestAnimationFrame(animateSquares);
}

animateSquares();
