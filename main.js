var data = {};
const adviceId = document.querySelector("#advice-id");
const advice = document.querySelector("#advice");
const button = document.querySelector("#btn")  
fetch("https://api.adviceslip.com/advice")
.then(res => res.json() )
.then(json =>  data = json )
.then(() =>{
    var resetAdvice = () => {
        adviceId.innerHTML = data.slip.id;
        advice.innerHTML = `"${data.slip.advice}"`;
    }
    console.log(data);
    resetAdvice();
    button.addEventListener("click", () =>{
        location.reload();
    })
})
