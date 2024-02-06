const input = document.querySelector("input");
const btn = document.querySelector("button");
const form = document.querySelector("form");

const details = input.value;

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

setTimeout(() => {
  const details = input.value;
  if (details === "") {
    alert("please enter your password");
  }
}, 5000);

btn.addEventListener("click", () => {
  if (!details) {
    input.type = "text";
    setTimeout(() => {
      input.type = "password";
    }, 1000);
  }
});
