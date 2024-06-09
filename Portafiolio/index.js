
const anegro = "linear-gradient(45deg,rgb(0, 0, 0) 25%,transparent 25%,transparent 75%,rgb(0, 0, 0) 75%,rgb(0, 0, 0) ),linear-gradient(45deg,rgb(0, 0, 0)  25%,white 25%,white 75%,rgb(0, 0, 0)  75%,rgb(0, 0, 0) )";
const arojo = "linear-gradient( 45deg, rgb(190, 44, 44) 25%, transparent 25%, transparent 75%, rgb(190, 44, 44) 75%, rgb(190, 44, 44) ), linear-gradient( 45deg, rgb(190, 44, 44) 25%, white 25%, white 75%, rgb(190, 44, 44) 75%, rgb(190, 44, 44))";
const aazul = "linear-gradient(45deg,rgb(53, 66, 187) 25%,transparent 25%,transparent 75%,rgb(53, 66, 187) 75%,rgb(53, 66, 187)),linear-gradient(45deg,rgb(53, 66, 187) 25%,white 25%,white 75%,rgb(53, 66, 187) 75%,rgb(53, 66, 187))";
const averde = "linear-gradient(45deg,rgb(53, 187, 53) 25%,transparent 25%,transparent 75%, rgb(53, 187, 53) 75%,rgb(53, 187, 53)),linear-gradient( 45deg, rgb(53, 187, 53) 25%,white 25%,white 75%,rgb(53, 187, 53) 75%,rgb(53, 187, 53))";

const negro = document.getElementById("negro");
const rojo = document.getElementById("rojo");
const azul = document.getElementById("azul");
const verde = document.getElementById("verde");

const cnegro = "0 0 1px #fff, 0 0 2px #fff, 0 0 2px #fff, 0 0 2px rgb(0, 0, 0), 0 0 2px rgb(0, 0, 0), 0 0 3px rgb(0, 0, 0), 0 0 4px rgb(0, 0, 0), 0 0 4px rgb(0, 0, 0)";
const crojo = "0 0 1px #fff, 0 0 2px #fff, 0 0 2px #fff, 0 0 2px rgb(192, 48, 48), 0 0 2px rgb(192, 48, 48), 0 0 3px rgb(192, 48, 48), 0 0 4px rgb(192, 48, 48), 0 0 4px rgb(192, 48, 48)";
const cazul = "0 0 1px #fff, 0 0 2px #fff, 0 0 2px #fff, 0 0 2px rgb(50, 63, 179), 0 0 2px rgb(50, 63, 179), 0 0 3px rgb(50, 63, 179), 0 0 4px rgb(50, 63, 179), 0 0 4px rgb(50, 63, 179)";
const cverde = "0 0 1px #fff, 0 0 2px #fff, 0 0 2px #fff, 0 0 2px rgb(17, 122, 49), 0 0 2px rgb(17, 122, 49), 0 0 3px rgb(17, 122, 49), 0 0 4px rgb(17, 122, 49), 0 0 4px rgb(17, 122, 49)";

const body = document.getElementById("body");
const gridAjedrez = document.getElementById("fondo");
const card = document.getElementById("card");
const cartaFrente = document.getElementById("cartaFrente");

function cambiarColores(color) {
    negro.style.textShadow = color;
    rojo.style.textShadow = color;
    azul.style.textShadow = color;
    verde.style.textShadow = color;
};
function setColorFondo(color) {
    const sheet = document.styleSheets[0];
    const ruleIndex = sheet.cssRules.length;
    body.style.backgroundColor = "#000000";
    gridAjedrez.style.opacity = 0;  
    setTimeout(() => {
        gridAjedrez.style.backgroundImage = color;
        gridAjedrez.style.opacity = 1;  
        sheet.insertRule(`#fondo::before { background-image: ${color}; }`, ruleIndex); 
        sheet.insertRule(`#fondo::before { animation: bgFade 0.01s ease-in-out forwards;}`, ruleIndex);
        }, 500);
    setTimeout(() =>{
        body.style.backgroundColor = "#fff";
    }, 900)
    
}

negro.addEventListener("click", () => {

    card.classList.toggle('is-flipped');
    cambiarColores(cnegro);
    setColorFondo(anegro);
    setTimeout(() =>{
        card.classList.toggle('is-flipped');
        cartaFrente.style.backgroundColor = "#000000";
    }, 1200)
});
rojo.addEventListener("click", () => {
    card.classList.toggle('is-flipped');
    cambiarColores(crojo);
    setColorFondo(arojo);;
    setTimeout(() =>{
        card.classList.toggle('is-flipped');
        cartaFrente.style.backgroundColor = "#dc143c";
    }, 1200)
});
azul.addEventListener("click", () => {
    card.classList.toggle('is-flipped');
    cambiarColores(cazul);
    setColorFondo(aazul);
    setTimeout(() =>{
        card.classList.toggle('is-flipped');
        cartaFrente.style.backgroundColor = "#3d34eb";
    }, 1200)
});
verde.addEventListener("click", () => {
    card.classList.toggle('is-flipped');
    cambiarColores(cverde);
    setColorFondo(averde);
    setTimeout(() =>{
        card.classList.toggle('is-flipped');
        cartaFrente.style.backgroundColor = "#41b332";
    }, 1200)
});

/*mi territorio no entrar: pura teoria
negro.addEventListener("click",event =>{
  card.classList.toggle('is-flipped');
  document.getElementById("card--frente").src = "blacked.html" + ReturnURL();
})
rojo.addEventListener("click",event =>{
  card.classList.toggle('is-flipped');
  document.getElementById("card--frente").src = "rojos.html" + ReturnURL();
})
azul.addEventListener("click",event =>{
  card.classList.toggle('is-flipped');
  document.getElementById("card--frente").src = "plata.html" + ReturnURL();
})
verde.addEventListener("click",event =>{
  card.classList.toggle('is-flipped');
  document.getElementById("card--frente").src = "viejoverde.html" + ReturnURL();
})
*/