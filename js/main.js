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

// 검색바

const searchcloseEl = document.querySelector(".search-closer")
const searchEl=document.querySelector(".search-starter")
const searchwrap =document.querySelector(".search-wrap")
const headerEl = document.querySelector("header")
const headerMenuEls = [...document.querySelectorAll("header ul.menu > li")]
const searchDelayEls =[...document.querySelectorAll('.search-wrap li')]
const searchInput = document.querySelector(".search-wrap input")
searchwrap.addEventListener("click", (e) => {
    e.stopPropagation();
})
searchEl.addEventListener("click", (e)=>{
    
    e.stopPropagation()
    searchwrap.classList.add("show")
    headerEl.classList.add("searching")
    console.log(headerMenuEls)
    headerMenuEls.reverse().forEach((el,index) => {
        el.style.transitionDelay = index*0.5 / headerMenuEls.length + 's'

    })
    searchDelayEls.forEach((el,index) => {
        el.style.transitionDelay = index*0.3 / searchDelayEls.length + "s"
    })
    setTimeout( ()=>{
        searchInput.focus()
    }, 1000)
})

searchcloseEl.addEventListener("click", (e)=>{
    
    e.stopPropagation()
    searchwrap.classList.remove("show")
    headerEl.classList.remove("searching")
    searchInput.value=''
})
window.addEventListener("click", (e)=>{
    searchwrap.classList.remove("show")
    headerEl.classList.remove("searching")
    
})




