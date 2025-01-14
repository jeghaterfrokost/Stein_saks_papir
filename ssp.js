let botValg = "";
let spillerValg = "";
const ResultatElm = document.getElementById("resultat")
const botElm = document.getElementById("bot")
const valg = ["stein", "saks", "papir"];
const steinElm = document.getElementById("stein")
const saksElm = document.getElementById("saks")
const papirElm = document.getElementById("papir")
const ktElm = document.getElementById("knapptittel")
const restart = document.getElementById("restart")

function botenhet() {
    const tilfeldigenhet = Math.floor(Math.random() * 3)
    botValg = valg[tilfeldigenhet]
    botElm.innerHTML = botValg.toUpperCase()
    console.log ("Maskinen valgte", botValg)
    sjekkresultat()
}

function velgenhet(valgt) {
    spillerValg = valgt;
    console.log ("Spilleren valgte", spillerValg)
    if (valgt === 'stein') {
        saksElm.style.display = "none";
        papirElm.style.display = "none";
        steinElm.style.display = "block";
    } else if (valgt === 'saks') {
        steinElm.style.display = "none";
        papirElm.style.display = "none";
        saksElm.style.display = "block"
    } else if (valgt === 'papir') {
        steinElm.style.display = "none";
        saksElm.style.display = "none";
        papirElm.style.display = "block"
    }
}

function sjekkresultat(){
    if (spillerValg === botValg){
        ResultatElm.innerHTML = "Det ble uavgjort! Begge valgte " + spillerValg
    }
    else if(
        (spillerValg === 'stein' && botValg === "saks") ||
        (spillerValg === 'saks' && botValg === "papir") ||
        (spillerValg === 'papir' && botValg === "stein") 
    )
        {
        ResultatElm.innerHTML = "Du vant!"
        restart.style.display = "block"
    }
    else{
        ResultatElm.innerHTML = "Du tapte"
        restart.style.display = "block"
    }
}

function restart(){
    location.reload()
}