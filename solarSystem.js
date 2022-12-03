const solarEl = document.getElementById("solar-system")
const solarBtn = document.getElementById("solar-btn")
const homeEl = document.getElementById("home")

solarBtn.addEventListener("click",()=>{
    solarEl.style.display="flex";

})

homeEl.addEventListener("click",()=>{
    solarEl.style.display ="none";
})