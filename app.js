let cookie = document.querySelector('.cookie-cost')
let parsedCookie = parseFloat(cookie.innerHTML)


let clickerCost = document.querySelector('.clicker-cost')
let parsedClickerCost = parseFloat(clickerCost.innerHTML)
let clickerlevel = document.querySelector(".clicker-level")
let clickerIncrease = document.querySelector(".clicker-increase")


let cpc =1;


function incrementCookie() {
    parsedCookie += cpc;
    cookie.innerHTML = parsedCookie
}

function buyClick() {
    if (parsedCookie >= parsedClickerCost) {
        parsedCookie -= parsedClickerCost
        cookie.innerHTML = parsedCookie
   
   clickerlevel.innerHTML ++

   
    }


}
