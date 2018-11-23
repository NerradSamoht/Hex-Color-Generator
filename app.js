function getHexColor() {
  return (
    "#" +
    Math.random()
      .toString(16)
      .slice(2, 8)
  );
}

function setBackground(bgColor) {
  document.body.style.backgroundColor = bgColor;
}

function setText(bgColor) {
  const text = document.querySelector("#color");
  text.innerText = bgColor.toUpperCase();
  text.style.color = getColorByBgColor(bgColor);
}

document.body.onclick = function() {
  const bgColor = getHexColor();
  setBackground(bgColor);
  setText(bgColor);
};

document.body.onkeyup = function(e) {
  if (e.keyCode == 32) {
    const bgColor = getHexColor();
    setBackground(bgColor);
    setText(bgColor);
  }
};

// function copied from Stack Overflow - https://stackoverflow.com/questions/3942878/how-to-decide-font-color-in-white-or-black-depending-on-background-color/3943023

function getColorByBgColor(bgColor) {
  return parseInt(bgColor.replace("#", ""), 16) > 0xffffff / 2
    ? "#000"
    : "#fff";
}
