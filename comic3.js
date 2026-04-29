let visualizador3 = document.getElementById("paginas3");
let anteriorBTN3 = document.getElementById("anteriorBTN3");
let siguienteBTN3 = document.getElementById("siguienteBTN3");

let numeros3 = [
    "./CARLOS/COMIC\ 1.jpg", 
    "./CARLOS/COMIC\ 2.jpg", 
    "./CARLOS/COMIC\ 3.jpg",
];

let i3 = 0;

function siguientePagina3(){
    anteriorBTN3.disabled = false;
    i3++;
    visualizador3.src = numeros3[i3];
    if (i3 == numeros3.length-1){
        siguienteBTN3.disabled = true;
    }
}

function anteriorPagina3(){
    siguienteBTN2.disabled = false;
    i3--;
    visualizador3.src = numeros3[i3];
    if(i3 == 0){
        anteriorBTN3.disabled=true;
        siguienteBTN3.disabled = false;
    }
}