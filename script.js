function replaceName() {
    let name = prompt("Siapa nama anda?","");
    document.getElementById("name").innerHTML =name
}

replaceName();

document.getElementById("tombol").addEventListener("click",function(){
    replaceName() 
})




