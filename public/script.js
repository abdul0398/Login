setInterval((() => {
    const date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let hrDiv = document.querySelector(".hour");
    let mintDiv = document.querySelector(".min");
    let secDiv = document.querySelector(".sec");


    hrDiv.innerHTML = hour % 12 + " hr";
    mintDiv.innerHTML = min + " min";
    secDiv.innerHTML = sec + " sec";
}), 100);


let theInput = document.getElementById("favcolor");

theInput.addEventListener("change", async function () {
    var theColor = theInput.value;
    document.getElementsByTagName("body")[0].style.background= theColor;
   await fetch("/color", {
    method: "POST",
    body: JSON.stringify({
        color:theColor
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
});



(async function(){
    const response =  await fetch("/getColor");
    const color = await response.json();
    document.getElementsByTagName("body")[0].style.background= color;
})()
