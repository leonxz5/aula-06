// function acao() {
//     document.write("executando ....<br/>");
// }


//temporizador
//setInterval(acao,2000);

// setInterval(()=>{
//     document.write("Execuntando atraves do arrow function... </br>")
// },1000);

// clearInterval(timer);

// var timer = setInterval(()=>{
//     document.write("Execuntando atraves do arrow function... </br>")
// },1000);

//Outro temporizador
function acao2(){
    document.write("Execuntando com o setTimeout!</br>");
}

setTimeout(acao2,3000);

setTimeout(()=>{
    document.write("Executando com arrow function!")
},4000);