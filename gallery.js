const galleryEl = document.querySelector(".gallery-img")
const rightEl = document.querySelector(".right")
const leftEl = document.querySelector(".left")
const imgEls = document.querySelectorAll("img")
const downEl = document.querySelector(".down-icon")
const xmarkEl = document.querySelector(".xmark-icon")
const sectionEl = document.querySelector(".gallery")
const galleryBtn = document.querySelector(".gallery-btn")

let nextPhotoNumber = 1

rightEl.addEventListener("click",()=>{
    
    nextPhotoNumber ++;
    updateImg(); 
})

leftEl.addEventListener("click",()=>{
    nextPhotoNumber--;
    updateImg();
})
downEl.addEventListener("click",()=>{
    xmarkEl.style.display ="inline";
    downEl.style.display = "none";

})
xmarkEl.addEventListener("click",()=>{
    sectionEl.style.display ="none";

})
galleryBtn.addEventListener("click",()=>{
    sectionEl.style.display ="flex";
    xmarkEl.style.display ="none";
    downEl.style.display = "inline";

})
function updateImg(){
    if(nextPhotoNumber > imgEls.length){
        nextPhotoNumber = 1;
    }
    else if(nextPhotoNumber < 1){
        nextPhotoNumber= imgEls.length
    }
    galleryEl.style.transform =`translateX(-${(nextPhotoNumber-1)*800}px)`;
}