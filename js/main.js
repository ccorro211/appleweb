const basketStarterEl = document.querySelector('header .basket-starter')
const basketEl=basketStarterEl.querySelector(".basket")

basketStarterEl.addEventListener("click", (e) => {
    e.stopPropagation()
    if(basketEl.classList.contains('show')){
        basketEl.classList.remove('show')
    }else{
        basketEl.classList.add('show')
    }
})
basketEl.addEventListener("click", (e)=>{
    e.stopPropagation()
})
window.addEventListener("click", (e)=>{
    basketEl.classList.remove('show')
})