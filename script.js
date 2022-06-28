// Create a "close" button and append it to each list item
// let myNodeList = document.getElementsByTagName("li");
// for(let i=0;i<myNodeList.length;i++) {
//     let span = document.createElement("span");
//     let txt = document.createTextNode("x");
//     span.className = "close";
//     span.appendChild(txt);
//     myNodeList[i].appendChild(span);
// }

// Click on a close button to hide the current list item
// let close = document.getElementsByClassName("close");
// for(let i=0;i<close.length;i++) {
//     close[i].onclick = function() {
//         let div = this.parentElement;
//         div.style.display = "none";
//     };
// }

// Add a "checked" symbol when clicking on a list item
let newList = document.querySelector("ul");
newList.addEventListener(
  "click",
  function (event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
    }
  },
  false
);

// Create a new list item when clicking on the "Add" button
const newElement = () => {
  let li = document.createElement("li");
  let data = document.getElementById("data").value;
  let t = document.createTextNode(data);
  li.appendChild(t);

  if (data === "") {
    alert("You must write something!");
  } else {
    let list = document.getElementById("myList");
    list.appendChild(li);
  }

  document.getElementById("data").value = "";

  let span = document.createElement("span");
  let txt = document.createTextNode("x");
  span.appendChild(txt);
  span.className = "close";
  li.appendChild(span);

  let close = document.getElementsByClassName("close");
  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }
};
