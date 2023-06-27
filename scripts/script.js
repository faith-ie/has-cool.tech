document.addEventListener("DOMContentLoaded", function() {
  const lifeSentenceElement = document.getElementById("life-sentence");
  const currentDate = new Date();
  const birthDate = new Date(2001, 1, 3);
  const diffInMilliseconds = currentDate - birthDate;
  const diffInYears = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 365));
  lifeSentenceElement.textContent = `I am just a dumb ${diffInYears}-year-old girl who is trying to figure out this whole "life" thing.`;
});
