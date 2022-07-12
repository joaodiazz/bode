const BASE_API = "https://api.adviceslip.com/advice";

const mainBtn = document.querySelector("#main_btn");
const backBtn = document.querySelector("#back");
const main = document.querySelector("#main");
const card = document.querySelector("#card");
const h1 = document.querySelector("#message_h1");

mainBtn.addEventListener("click", () => {
  main.classList.add("hidden");
  card.classList.remove("hidden");
  putMessage();
});

backBtn.addEventListener("click", () => {
  main.classList.remove("hidden");
  card.classList.add("hidden");

  h1.textContent = "";
});

const putMessage = async () => {
  const data = await fetch(BASE_API);
  const json = await data.json();

  h1.textContent = json.slip.advice;
  return;
};
