const btn = document.getElementById("startBtn");

btn.addEventListener("click", () => {

document.body.style.transition = "1s";
document.body.style.background = "#000814";

document.querySelector(".container").innerHTML = `

<h1>🎉 Welcome Beb Joshua 🎉</h1>

<h2>❤️</h2>

<p>
Sebelum membuka hadiahmu...
<br><br>
Kamu harus menyelesaikan beberapa tantangan dulu 😆
</p>

<button id="nextBtn">
Let's Go 🚀
</button>

`;

document.getElementById("nextBtn").addEventListener("click", level1);

});

function level1(){

document.querySelector(".container").innerHTML = `

<h1>🎈 Level 1 🎈</h1>

<p>Pecahkan semua balon untuk membuka hadiahmu!</p>

<button id="balloonBtn">
Mulai Game 🎈
</button>

`;

document.getElementById("balloonBtn").addEventListener("click", ()=>{

alert("Game balon akan kita buat di langkah berikutnya 🎉");

});

}
