const input = document.getElementById("input");
const submitBtn = document.getElementById("submit");
const main = document.querySelector(".main");
const statusString = document.getElementById("status");

submitBtn.addEventListener("click", () => {
  var node = document.createElement("DIV");
  node.className = "sender";
  var textnode = document.createTextNode(input.value);
  var inputText = input.value;

  node.appendChild(textnode);
  main.appendChild(node);

  input.value = "";
  var node2 = document.createElement("DIV");
  node2.className = "bot";
  var textnode2 = document.createTextNode(localStorage.getItem(inputText));
  if (localStorage.getItem(inputText) === null) {
    let answer = window.prompt("Sorry, I don't understand. What should I answer?");
    var textnodeanswer = document.createTextNode(answer);
    node2.appendChild(textnodeanswer);
    if (answer !== null) {
      statusString.innerText = "Typing ...";
      setTimeout(() => {
        main.appendChild(node2);
        localStorage.setItem(inputText, answer);
        statusString.innerText = "Online";
      }, answer.length * 300);
    }
  } else {
    statusString.innerText = "Typing ...";
    setTimeout(() => {
      node2.appendChild(textnode2);
      main.appendChild(node2);
      statusString.innerText = "Online";
    }, localStorage.getItem(inputText).length * 300);
  }
});
