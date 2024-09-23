let nomeUsuario ='cristopher, neves';

// alert(nomeUsuario);
function soma(a,b){
return a+b;
}

console.log("a soma de 6+6 é",soma(6,6));

function multiplication(b,h){
return b*h;
}

console.log("um quarado d 9 por 9 a sua area é:",multiplication(9,9));



let areaTriangulo = function(a,b){
    return (a*b)/2;
}
console.log("se um lado do triangulo isoceles for 2 sua area é:",areaTriangulo(2,2));



let num1 = parseInt(prompt('numero 1')) ;
let num2= parseInt(prompt('numero 2')) ;
let num3= parseInt(prompt('numero 3')) ;
function media(a,b,c){
    return ((a+b+c)/3);
}
document.write(media(num1, num2, num3));