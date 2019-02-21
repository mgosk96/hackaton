console.log("tajemnicza-tablica.js")

const table = document.getElementById('table');
const row = table.getElementsByTagName('tr');
let td = table.getElementsByTagName('td');
let secret=[];
let letters=[];
const showBtn = document.getElementById('show');
const showHiddenBtn = document.getElementById('showHidden');
const deleteBtn = document.getElementById('delete');
const result = document.getElementById('result');
let finalPassword =[];
const workPlace = document.getElementsByClassName('work-place');


showBtn.addEventListener('click', () => {
    secret = [];
    for (let i=0; i<td.length; i++) {
        if(td[i].style.backgroundColor === td[i].style.color) {
            secret.push(td[i]);
        }
    }
    letters = secret.map((item) => item.textContent);
    result.textContent='';
    result.textContent = letters.join('');
});

showHiddenBtn.addEventListener('click', () => {
    for(let i=0; i<td.length; i++) {
        if(td[i].style.backgroundColor === td[i].style.color) {
            td[i].style.backgroundColor = 'rgb(0,0,0)';
            td[i].style.color = 'rgb(255,255,255)';
        }
        else{
            td[i].style.color = 'rgb(255,255,255)';
            td[i].style.backgroundColor = 'rgb(255,255,255)';
        }
    }
})

deleteBtn.addEventListener('click', () => {
    for(let i=0; i<td.length; i++) {
        if(td[i].style.backgroundColor === td[i].style.color) {
            td[i].style.display ='none';
            showHiddenBtn.disabled = 'true';
            showBtn.disabled = 'true';

        } else if(td[i].style.backgroundColor !== td[i].style.color) {
            table.style.display = "inline";
            finalPassword.push(td[i]);
            // table.style.display = 'none';
            // let newTable = document.createElement('table');
            // workPlace.appendChild(td[i]);
            // console.log(newTable);
        }
    }

})



