let visualizador4 = document.getElementById("paginas4");
let anteriorBTN4 = document.getElementById("anteriorBTN4");
let siguienteBTN4 = document.getElementById("siguienteBTN4");

let numeros4 = [
    "./DAVID/David1.jpg", 
    "./DAVID/David2.jpg", 
    "./DAVID/David3.jpg",
    "./DAVID/David4.jpg",
    "./DAVID/David5.jpg",
    "./DAVID/David6.jpg",
    "./DAVID/David7.jpg",
    "./DAVID/David8.jpg"
];

let i4 = 0;

function siguientePagina4(){
    anteriorBTN4.disabled = false;
    i4++;
    visualizador4.src = numeros4[i4];
    if (i4 == numeros4.length-1){
        siguienteBTN4.disabled = true;
    }
}

function anteriorPagina4(){
    siguienteBTN4.disabled = false;
    i4--;
    visualizador4.src = numeros4[i4];
    if(i4 == 0){
        anteriorBTN4.disabled=true;
        siguienteBTN4.disabled = false;
    }
}