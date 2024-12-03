// @ts-nocheck


let user = document.getElementById("username")
let btn = document.getElementById("btn")


btn.addEventListener("click", function () {


    alert(`you logged in successfully ${user.value}`)

})





const cont = document.getElementById("join")
const buttn = document.getElementById("text")

buttn.style.display = "none"


cont?.addEventListener("click", function () {
    cont.style.display = "none"
    buttn.innerText = `welcome to our team ${user.value}`
    buttn.style.display = "block"
    buttn.style.margin = "30px 10px"
    buttn?.classList.add("logo")
    setTimeout(() => {


        cont.style.display = "block"
        cont.style.width = "180px"
        cont.style.textAlign = "center"
        buttn.style.display = "none"





    }, 3000);


})


const colorBtn = document.getElementById("color")
const logo = document.getElementById("logo")
colorBtn.addEventListener("click", function name() {
    const c = Math.round(Math.random() * 100)
    logo.style.color = `hsl(${c},50%,30%)`
})

let i = 1
function autoWriting() {
    let title = document.getElementById("title")

    let b = "web design&"

    title.innerText = b
    i++

    if (i > b.length) {
        i = 1
    }

}


setInterval(autoWriting,200)












