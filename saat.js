let user = prompt("Adın nedir ???")

function showTime(){

let name = document.querySelector("#name")
name.innerHTML = `${user}`

let tarih = new Date();

var gunler = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]

let clock = document.querySelector("#clock")
clock.innerHTML =`
${tarih.getHours()}:${tarih.getMinutes()}:${tarih.getSeconds()} ${gunler[tarih.getDay()]} 
`
}
setInterval(showTime,1000)
