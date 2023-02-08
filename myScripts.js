// Ďalšia varianta dropdown, ktorú som nakódoval. Tentokrát, keď kliknete na tlačítko 
// tak sa vám zobrazí text a keď kliknete znova na tlačítko tak text zmizne.

var ponuka = document.querySelector("ul").style.display = "none";
console.log(ponuka);

document.querySelector(".btn").addEventListener("click", function(){
    if (document.querySelector("ul").style.display == "none") {
        document.querySelector("ul").style.display = "block";
    } else {
        document.querySelector("ul").style.display = "none";
    }
});