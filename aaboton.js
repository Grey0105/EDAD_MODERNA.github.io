
//POP UP VARIABLES






let titulo1 = document.getElementById("titulote");
let fondohtml = document.getElementById("fondo")
let contenedoores = document.getElementById('contenedoor');
let SuperiorBarra1 = document.getElementById("SuperiorBarra");
let nochebotto = document.getElementById("botonnoche");
let valoraciónn = document.getElementById("valor")
let diaboton = document.getElementById("botondia")
let imagen1 = document.getElementById("imagenn")







let hunoo = document.getElementById("huno");
let hunoo2 = document.getElementById("huno2");
let hunoo3 = document.getElementById("huno3");
let hunoo4 = document.getElementById("huno4");
let hunoo5 = document.getElementById("huno5");


let parrafoss1 = document.getElementById("parrafos");
let parrafoss2 = document.getElementById("parrafos2");
let parrafoss3 = document.getElementById("parrafos3");
let parrafoss4 = document.getElementById("parrafos4");
let parrafoss5 = document.getElementById("parrafos5");
let barrasuperiorr = document.getElementById("SuperiorBarra")

let contenedorcarru = document.getElementById("contenecarrusell")








nochebotto.addEventListener('click', () => {
    contenedoores.setAttribute("class", "contenedornoche");
    titulo1.setAttribute("class","titulitonoche");
    fondohtml.setAttribute("class", "htmlnoche");
    contenedorcarru.setAttribute("class", "contenecarrunoche");
    parrafoss1.setAttribute("class", "pnoche");
    parrafoss2.setAttribute("class", "pnoche");
    parrafoss3.setAttribute("class", "pnoche");
    parrafoss4.setAttribute("class", "pnoche");
    parrafoss5.setAttribute("class", "pnoche");
    popp1.setAttribute("popupnoche")

    hunoo.setAttribute("class", "h1noche");
    hunoo2.setAttribute("class", "h1noche");
    hunoo3.setAttribute("class", "h1noche");
    hunoo4.setAttribute("class", "h1noche");
    hunoo5.setAttribute("class", "h1noche");

    barrasuperiorr.setAttribute("class", "barraSuperiorNoche")
    valoraciónn.setAttribute("class", "valoracionnoche barracont text")
    imagen1.src = "arconoche.png";
    })


diaboton.addEventListener('click', () => {
    contenedoores.setAttribute("class", "contenedor");
    titulo1.setAttribute("class","titulito");
    fondohtml.setAttribute("class", "html");
    contenedorcarru.setAttribute("class", "contenecarru");
    parrafoss1.setAttribute("class", "pp");
    parrafoss2.setAttribute("class", "pp");
    parrafoss3.setAttribute("class", "pp");
    parrafoss4.setAttribute("class", "pp");
    parrafoss5.setAttribute("class", "pp");

    hunoo.setAttribute("class", "h1");
    hunoo2.setAttribute("class", "h1");
    hunoo3.setAttribute("class", "h1");
    hunoo4.setAttribute("class", "h1");
    hunoo5.setAttribute("class", "h1");

    barrasuperiorr.setAttribute("class", "barraSuperior")
    valoraciónn.setAttribute("class", "valoracion barracont text")
    imagen1.src = "arcoflecha.png";
})


//POP UP
let venusboton = document.getElementById("popUpVenus");
let ventana1 = document.getElementById("ventana");
let cerrar = document.getElementById("closepopup");





venusboton.addEventListener('click', ()=>{

    ventana1.setAttribute("class", "mostrarpopup")

})

cerrar.addEventListener('click', ()=>{

    ventana1.setAttribute("class", " ")

})



let monalisaboton = document.getElementById("popUpMonalisa");
let ventana22 = document.getElementById("ventana2");
let cerrar2 = document.getElementById("closepopup2");




monalisaboton.addEventListener('click', ()=>{

    ventana22.setAttribute("class", "mostrarpopup")

})

cerrar2.addEventListener('click', ()=>{

    ventana22.setAttribute("class", " ")

})





let edadmodernaboton = document.getElementById("popUpEdadmodern");
let ventana33 = document.getElementById("ventana3");
let cerrar3 = document.getElementById("closepopup3");


edadmodernaboton.addEventListener('click', ()=>{

    ventana33.setAttribute("class", "mostrarpopup")

})

cerrar3.addEventListener('click', ()=>{

    ventana33.setAttribute("class", " ")

})





let revolucionboton = document.getElementById("popUpRev");
let ventana44 = document.getElementById("ventana4");
let cerrar4 = document.getElementById("closepopup4");








revolucionboton.addEventListener('click', ()=>{

    ventana44.setAttribute("class", "mostrarpopup")

})

cerrar4.addEventListener('click', ()=>{

    ventana44.setAttribute("class", " ")

})






let esculturaboton = document.getElementById("popUpEsculturamod");
let ventana55 = document.getElementById("ventana5");
let cerrar5 = document.getElementById("closepopup5");




esculturaboton.addEventListener('click', ()=>{

    ventana55.setAttribute("class", "mostrarpopup")

})

cerrar5.addEventListener('click', ()=>{

    ventana55.setAttribute("class", " ")

})




let vent1 = document.getElementById("pop1");


nochebotto.addEventListener('click', () => {
   
    vent1.setAttribute("class", "popupnoche")
})


diaboton.addEventListener('click', () => {
    vent1.setAttribute("class", " ")
    
})








document.addEventListener("DOMContentLoaded", function() {
    const carrusel = document.querySelector('.verticalcarrusel');
    
    const elementos = Array.from(carrusel.children);
    
    elementos.forEach(el => {
        const clon = el.cloneNode(true);
        carrusel.appendChild(clon);
    });
});


//CUESTIONARIOOO

let ventanaquiz = document.getElementById("VENTANAQUIZ");
let abrirquiz = document.getElementById("cuestionario");
let cerrarquiz22 = document.getElementById("cerrarquiz2");

abrirquiz.addEventListener('click', ()=> {

    ventanaquiz.setAttribute("class", "mostrarquiz")

})

cerrarquiz22.addEventListener('click', ()=>{

    ventanaquiz.setAttribute("class", " ")

})

let preguntas = [
    {
        pregunta: "¿Qué corriente destacó por su dramatismo y claroscuro?",
        respuestas : [
            { text: "Renacimiento", correct: false },
            { text: "Rococó", correct: false },
            { text: "Barroco", correct: true },
            { text: "Neoclasicismo", correct: false },
        ]
    },


    {
        pregunta: "¿Qué técnica permitió crear profundidad en las pinturas?",
        respuestas : [
            { text: "La perspectiva lineal", correct: true },
            { text: "El óleo sobre lienzo", correct: false },
            { text: "El grabado", correct: false },
            { text: "El claroscuro", correct: false },
        ]
    },


    {
        pregunta: "¿Qué movimiento reaccionó contra el exceso decorativo del Rococó?",
        respuestas : [
            { text: "Barroco", correct: false },
            { text: "Renacimiento", correct: false },
            { text: "Romanticismo", correct: false },
            { text: "Neoclasicismo", correct: true },
        ]
    },


    {
        pregunta: "¿Qué clase social emergente impulsó el patrocinio artístico?",
        respuestas : [
            { text: "La burguesía", correct: true },
            { text: "El campesinado", correct: false },
            { text: "La nobleza", correct: false },
            { text: "El clero", correct: false },
        ]
    },

]


let preguntas0 = document.getElementById("pregunta");
let respuestas0 = document.getElementById("respuestaboton");
let siguientee = document.getElementById("siguiente")

let preguntaActual = 0;
let puntaje = 0;

function iniciarQuiz(){

    preguntaActual = 0;
    puntaje = 0;
    siguientee.innerHTML="Siguiente";
    mostrarPregunta();

}


function mostrarPregunta(){
    eliminar();
    let actualpreg = preguntas[preguntaActual];
    let preguntanum = preguntaActual+1;
    preguntas0.innerHTML = preguntanum + ". " + actualpreg.pregunta;
    actualpreg.respuestas.forEach(respuesta=>{
        let botonn = document.createElement("button");
        botonn.innerHTML = respuesta.text;
        botonn.classList.add("resp");
        respuestas0.appendChild(botonn);
        if(respuesta.correct){
            botonn.dataset.correct=respuesta.correct;
        }
        botonn.addEventListener('click', seleccionarrespuesta);

})
}

function eliminar(){
   siguientee.style.display = "none";
   while(respuestas0.firstChild){
    respuestas0.removeChild(respuestas0.firstChild);
   }
}


function seleccionarrespuesta(e){

    let respuestasel = e.target;
    let correcta = respuestasel.dataset.correct === "true";
    if(correcta){
        respuestasel.classList.add("correcta");
        puntaje++
    }
    else{
        respuestasel.classList.add("incorrecta")
    }

    Array.from(respuestas0.children).forEach(botonn=>{
        if(botonn.dataset.correct=== "true"){
            botonn.classList.add("correcta");

        }
       botonn.disabled = true;
    })
    siguientee.style.display="block";

}


function mostrarPuntaje(){
    eliminar();
    
   
    preguntas0.innerHTML = `Tu puntaje es ${puntaje} de ${preguntas.length}`;
    siguientee.innerHTML="Jugar de nuevo";
    siguientee.style.display = "block";
  
}

function botonsiguiente(){
    preguntaActual++;
    if(preguntaActual<preguntas.length){
        mostrarPregunta();
    }
    else{
        mostrarPuntaje();
    }
}

siguientee.addEventListener('click', ()=>{
    if(preguntaActual<preguntas.length){
        botonsiguiente();
    
    }
    else{
        iniciarQuiz();
    }
})

iniciarQuiz()