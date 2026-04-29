let visualizador2 = document.getElementById("paginas2");
let anteriorBTN2 = document.getElementById("anteriorBTN2");
let siguienteBTN2 = document.getElementById("siguienteBTN2");

let numeros2 = [
    "./ARAI/La Ultima Migaja_AraiVazquez_Portada.jpg", 
    "./ARAI/La Ultima Migaja_AraiVazquez_Pagina 2.jpg", 
    "./ARAI/La Ultima Migaja_AraiVazquez_Pagina 3.jpg", 
    "./ARAI/La Ultima Migaja_AraiVazquez_Pagina 1.jpg"
];

let i2 = 0;

function siguientePagina2(){
    anteriorBTN2.disabled = false;
    i2++;
    visualizador2.src = numeros2[i2];
    if (i2 == numeros2.length-1){
        siguienteBTN2.disabled = true;
    }
}

function anteriorPagina2(){
    siguienteBTN2.disabled = false;
    i2--;
    visualizador2.src = numeros2[i2];
    if(i2 == 0){
        anteriorBTN2.disabled=true;
        siguienteBTN2.disabled = false;
    }
}