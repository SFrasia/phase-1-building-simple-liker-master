// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
const hearts = document.querySelectorAll(".like-glyph");
for (let i = 0; i < hearts.length; i++) {
  console.log(hearts[i].textContent);
  hearts[i].addEventListener("click", (e) => {
    e.target.textContent === FULL_HEART
      ? ((e.target.textContent = EMPTY_HEART),
        e.target.classList.remove("activated-heart"))
      : ((e.target.textContent = FULL_HEART),
        e.target.classList.add("activated-heart"));
    console.log(e.target.parentNode);
  });
}
function respFromServer() {
  // a response from the server
  document.getElementById("modal").classList.add("hidden");
  fetch(" http://localhost:3000/hearts")
    .then((res) => console.log(res))
    .catch(() => {
      
      document.getElementById("modal").classList.remove("hidden");
      setTimeout(
        () => document.getElementById("modal").classList.add("hidden"),
        3000
      );
    });
}
respFromServer();

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
