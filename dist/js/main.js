const header = document.querySelector(".main-header")

window.addEventListener("scroll",()=>{
    const scrollPos = window.scrollY;
    console.log(scrollPos)
    if(scrollPos > 120){
        header.classList.add("scrolled")
    }else{
        header.classList.remove("scrolled")
    }
} )