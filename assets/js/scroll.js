const containerScrollCer=document.getElementById("scrollCer")
const btnCerRight= document.getElementById("scrollCerRight")
const btnCerLeft= document.getElementById("scrollCerLeft")

btnCerRight.addEventListener("click", ()=>containerScrollCer.scrollLeft -= 300)
btnCerLeft.addEventListener("click", ()=>containerScrollCer.scrollLeft += 300)

const containerScrollCli=document.getElementById("scrollCli")
const btnCliRight= document.getElementById("scrollCliRight")
const btnCliLeft= document.getElementById("scrollCliLeft")

btnCliRight.addEventListener("click", ()=>containerScrollCli.scrollLeft -= 300)
btnCliLeft.addEventListener("click", ()=>containerScrollCli.scrollLeft += 300)

const containerScrollCol=document.getElementById("scrollCol")
const btnColRight= document.getElementById("scrollColRight")
const btnColLeft= document.getElementById("scrollColLeft")

btnColRight.addEventListener("click", ()=>containerScrollCol.scrollLeft -= 300)
btnColLeft.addEventListener("click", ()=>containerScrollCol.scrollLeft += 300)