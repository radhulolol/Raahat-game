let score = 0;

function removeHostile(element) {
  element.style.display = "none";
  score += 10;
  updateScore();
}

function buildInclusive() {
  const cityscape = document.getElementById("cityscape");
  const inclusiveSpace = document.createElement("div");
  inclusiveSpace.className = "inclusive";
  inclusiveSpace.style.width = "100px";
  inclusiveSpace.style.height = "50px";
  inclusiveSpace.style.backgroundColor = "#2ecc71";
  inclusiveSpace.style.margin = "10px auto";
  inclusiveSpace.textContent = "Inclusive Space";
  inclusiveSpace.style.lineHeight = "50px";
  inclusiveSpace.style.color = "#fff";
  cityscape.appendChild(inclusiveSpace);

  score += 20;
  updateScore();
}

function updateScore() {
  document.getElementById("score").textContent = `Score: ${score}`;
}
