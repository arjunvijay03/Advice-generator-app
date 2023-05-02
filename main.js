var data = {};
const adviceId = document.querySelector("#advice-id");
const advice = document.querySelector("#advice");
const button = document.querySelector("#btn");

const fetchData = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((json) => (data = json))
    .then(() => {
      adviceId.innerHTML = data.slip.id;
      advice.innerHTML = `"${data.slip.advice}"`;
      
    });
};
fetchData();

button.addEventListener("click", fetchData);
