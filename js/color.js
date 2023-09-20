let color=document.getElementById("color")
let base=document.getElementById("base")
let btn=document.getElementById("cambio")

btn.addEventListener("click",()=>{
    base.style.background=color.value
})

base.addEventListener("click",()=>{
    alert("El color del fondo es : "+color.value+" en hexadecimal")
})