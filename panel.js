const signal = document.getElementById("signal");
const votes = {
  Energy: 0,
  Focus: 0,
  Chaos: 0,
  Teach: 0
};

document.querySelectorAll("button[data-vote]").forEach((button) => {
  button.addEventListener("click", () => {
    const vote = button.getAttribute("data-vote");
    votes[vote] += 1;

    const topSignal = Object.entries(votes).sort((a, b) => b[1] - a[1])[0];
    signal.textContent = `${topSignal[0]} is leading`;
  });
});
