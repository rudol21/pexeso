const pocetPolicok = 12;
var plocha = document.getElementById("hraciaPlocha");
var pole = [];
//var pole = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0];

while(pole.length < pocetPolicok) {
    var vygCis = getRndInteger(0,pocetPolicok);
    if(!pole.includes(vygCis)) {
        pole.push(vygCis);
    }
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
var pom = 0;
while(pom < pocetPolicok)
{
    if(pole[pom] > 7)
    {pole[pom] = pole[pom]-(pocetPolicok/2)}
    pom++;
}
for(let i = 0; i < pocetPolicok;i++)
{
    let policko = document.createElement("div");
    policko.innerText = pole.pop();
    policko.classList.add("vzhlad");
    plocha.appendChild(policko);
}







/*
const pocet = 16;
var plocha = document.getElementById("hraciaPlocha");
var poleCisel = [];
//plocha.innerHTML = "<div>1</div>";

while(poleCisel.length < 16) {
    var nahodneCislo = getRandomInt(0,15);
    if(!poleCisel.includes(nahodneCislo)) {
        poleCisel.push(nahodneCislo);
    }
}
for(var l=0; l < pocet; l++)
{
    if(poleCisel[l] > 7)
        poleCisel[l] = poleCisel[l] -8;
}

for(let i =0; i <pocet; i++) {
    let karta = document.createElement("div",);
    karta.innerText = poleCisel.pop();
    karta.classList.add("vyzorKarty");
    karta.classList.toggle("otoc");
    plocha.appendChild(karta);
    karta.addEventListener("click", function(){
        karta.classList.toggle("otoc");
    });
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}*/
