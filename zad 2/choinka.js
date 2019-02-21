console.log("choinka.js");
const poziomy = document.getElementById('poziomy');
const pojemnosc = document.getElementById('pojemnosc');
const btn = document.querySelector('button');
const result = document.getElementById('result');
let treeArr;
let iloscWierszy=5;
let iloscKolumn=5;
let napis = '';

btn.addEventListener('click', () => {
    result.textContent="";
    let pietra = Math.floor(poziomy.value / pojemnosc.value);
    result.textContent += pietra;
})


    var n = 8;
 
    for(i=1; i<=n; i++)
    {   //Prints trailing spaces
        for(j=i; j<n; j++)
        {
            document.write(" ");
        }
 
        //Prints the pyramid pattern
        for(j=1; j<=(2*i-1); j++)
        {
            document.write("*");
        }
 
        document.write("<br>");
        }