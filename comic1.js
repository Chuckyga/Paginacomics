let visualizador = document.getElementById("paginas1");
let anteriorBTN = document.getElementById("anteriorBTN");
let siguienteBTN = document.getElementById("siguienteBTN");
let ventana = document.getElementById("ventana");

let numeros = [
    "./ELIZABETH/COMIC_ELI_1.jpg", 
    "./ELIZABETH/COMIC_ELI_2.jpg", 
    "./ELIZABETH/COMIC_ELI_3.jpg", 
    "./ELIZABETH/COMIC_ELI_4.jpg",
    "./ELIZABETH/COMIC_ELI_5.jpg"
];

let i = 0;

function siguientePagina(){
    anteriorBTN.disabled = false;
    i++;
    visualizador.src = numeros[i];
    if (i == numeros.length-1){
        siguienteBTN.disabled = true;
    }
}

function anteriorPagina(){
    siguienteBTN.disabled = false;
    i--;
    visualizador.src = numeros[i];
    if(i == 0){
        anteriorBTN.disabled=true;
        siguienteBTN.disabled = false;
    }
}