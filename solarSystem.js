const solarEl = document.getElementById("solar-system")
const solarBtn = document.getElementById("solar-btn")
const homeEl = document.getElementById("home")
const contactsBtn = document.getElementById("contacts-link")
const contactsMenu = document.getElementById("contacts")
const closeIcon = document.getElementById("cross-icon")

solarBtn.addEventListener("click",()=>{
    solarEl.style.display="flex";

})

homeEl.addEventListener("click",()=>{
    solarEl.style.display ="none";
})

contactsBtn.addEventListener("click",()=>{
    contactsMenu.style.display="inline";

})

closeIcon.addEventListener("click",()=>{
    contactsMenu.style.display="none";
})