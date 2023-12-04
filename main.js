const container = document.querySelector(".container");
const inp = document.getElementById("input");
const con = document.querySelector(".con");
const title = document.getElementById("title");
const btn = document.getElementById("btn");


function Love() {
    title.innerHTML = inp.value;
}

function showData() {
    container.style.display = "none";
    btn.style.display = "none";
    con.style.display = "flex";
}

btn.addEventListener("click",function () {
    showData();
    Love();
})