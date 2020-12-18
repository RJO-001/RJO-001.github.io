let sudokuHSolved = [
    [5, 8, 1, 6, 7, 2, 4, 3, 9],
    [7, 9, 2, 8, 4, 3, 6, 5, 1],
    [3, 6, 4, 5, 9, 1, 7, 8, 2],
    [4, 3, 8, 9, 5, 7, 2, 1, 6],
    [2, 5, 6, 1, 8, 4, 9, 7, 3],
    [1, 7, 9, 3, 2, 6, 8, 4, 5],
    [8, 4, 5, 2, 1, 9, 3, 6, 7],
    [9, 1, 3, 7, 6, 8, 5, 2, 4],
    [6, 2, 7, 4, 3, 5, 1, 9, 8]
];
let sudokuH = [
    [0, 0, 0, 6, 0, 0, 4, 0, 0],
    [7, 0, 0, 0, 0, 3, 6, 0, 0],
    [0, 0, 0, 0, 9, 1, 0, 8, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 5, 0, 1, 8, 0, 0, 0, 3],
    [0, 0, 0, 3, 0, 6, 0, 4, 5],
    [0, 4, 0, 2, 0, 0, 0, 6, 0],
    [9, 0, 3, 0, 0, 0, 0, 0, 0],
    [0, 2, 0, 0, 0, 0, 1, 0, 0]
];
let sudokuMSolved = [
    [1, 2, 3, 6, 7, 8, 9, 4, 5],
    [5, 8, 4, 2, 3, 9, 7, 6, 1],
    [9, 6, 7, 1, 4, 5, 3, 2, 8],
    [3, 7, 2, 4, 6, 1, 5, 8, 9],
    [6, 9, 1, 5, 8, 3, 2, 7, 4],
    [4, 5, 8, 7, 9, 2, 6, 1, 3],
    [8, 3, 6, 9, 2, 4, 1, 5, 7],
    [2, 1, 9, 8, 5, 7, 4, 3, 6],
    [7, 4, 5, 3, 1, 6, 8, 9, 2]
];
let sudokuM = [
    [0, 2, 0, 6, 0, 8, 0, 0, 0],
    [5, 8, 0, 0, 0, 9, 7, 0, 0],
    [0, 0, 0, 0, 4, 0, 0, 0, 0],
    [3, 7, 0, 0, 0, 0, 5, 0, 0],
    [6, 0, 0, 0, 0, 0, 0, 0, 4],
    [0, 0, 8, 0, 0, 0, 0, 1, 3],
    [0, 0, 0, 0, 2, 0, 0, 0, 0],
    [0, 0, 9, 8, 0, 0, 0, 3, 6],
    [0, 0, 0, 3, 0, 6, 0, 9, 0]
];
let sudokuESolved = [
    [1, 5, 2, 4, 8, 9, 3, 7, 6],
    [7, 3, 9, 2, 5, 6, 8, 4, 1],
    [4, 6, 8, 3, 7, 1, 2, 9, 5],
    [3, 8, 7, 1, 2, 4, 6, 5, 9],
    [5, 9, 1, 7, 6, 3, 4, 2, 8],
    [2, 4, 6, 8, 9, 5, 7, 1, 3],
    [9, 1, 4, 6, 3, 7, 5, 8, 2],
    [6, 2, 5, 9, 4, 8, 1, 3, 7],
    [8, 7, 3, 5, 1, 2, 9, 6, 4]
];
let sudokuE = [
    [1, 0, 0, 4, 8, 9, 0, 0, 6],
    [7, 3, 0, 0, 0, 0, 0, 4, 0],
    [0, 0, 0, 0, 0, 1, 2, 9, 5],
    [0, 0, 7, 1, 2, 0, 6, 0, 0],
    [5, 0, 0, 7, 0, 3, 0, 0, 8],
    [0, 0, 6, 0, 9, 5, 7, 0, 0],
    [9, 1, 4, 6, 0, 0, 0, 0, 0],
    [0, 2, 0, 0, 0, 0, 0, 3, 7],
    [8, 0, 0, 5, 1, 2, 0, 0, 4]
];

let example = [
    [8, 2, 7, 1, 5, 4, 3, 9, 6],
    [9, 6, 5],
    [3, 4, 1],
    [5],
    [4],
    [6],
    [7],
    [1],
    [2]
];
let board = document.getElementById("board");
let sudokuB = [];
let level;
let answer;
let row = [];
let tries = document.getElementById("tries");
let count = 0;
let countCor2 = 0;
let countCor = 0;
let select =  document.getElementById("select");

drawBoard();

function levelSelect(value){
    if(value == "easy"){
        level = sudokuE;
        answer = sudokuESolved;
    } else if(value == "medium"){
        level = sudokuM;
        answer = sudokuMSolved;
    } else {
        level = sudokuH;
        answer = sudokuHSolved;
    }
    populate();
    select.style.display = "none";
}

tries.innerHTML = `${count}`;

function drawBoard(){
    for(let i = 0; i < 9; i++){ 
        row = document.createElement('div');
        row.classList.add('row');
        for(let j = 0; j < 9; j++){
            row[j] = document.createElement('input');
            row[j].classList.add('box');
            row[j].setAttribute('type', 'text');
            row[j].setAttribute('maxlength', '1');
            row[j].setAttribute('oninput', `check(event.data, ${i}, ${j})`);    
            if(j % 3 === 0){
                row[j].classList.add('left');
            }
            if(i % 3 === 0){
                row[j].classList.add('top');
            }
            if(j === 8){
                row[j].classList.add('right');
            }
            if(i === 8){
                row[j].classList.add('bottom');
            }
            row.appendChild(row[j]);
        }
        board.appendChild(row);
        sudokuB.push(row);
    }
}


function populate(){
    console.log(level, sudokuB);
    for(let i = 0; i < level.length; i++){
        for(let j = 0; j < level[i].length; j++){
            if(level[i][j]){
                sudokuB[i][j].value = `${level[i][j]}`;
                sudokuB[i][j].disabled = true;
                sudokuB[i][j].style.backgroundColor = 'hsla(0, 0%, 89%, 0.8)';
            } else {
                countCor++;
            }
        }
    }
    countCor2 = countCor;
}
    


function check(event, i, j){
    if(event){
            count++;
            tries.innerHTML = `${count}`;
    }
    if(event == answer[i][j]){
        sudokuB[i][j].disabled = true;
        sudokuB[i][j].style.backgroundColor = "hsla(73, 62%, 50%, 0.8)";
        countCor--;
        sudokuB[i][j]
        if(countCor === 0){
            finish();
        }
    } else {
        sudokuB[i][j].style.backgroundColor = "hsla(3, 96%, 52%,0.8)";
        
    }
}

function finish(){
    let result = document.getElementById('finish').childNodes[1];
    result.innerHTML = `Done! with ${count} number of tries, ${Math.abs(countCor2 - count)} of which are wrong`;
    document.getElementById('finish').style.display = "block";
}

function main(){
    for(let i = 9; i > 0; i--){
        board.removeChild(board.childNodes[i]);
    }
    sudokuB = [];
    drawBoard();
    count = 0;
    countCor = 0;
    tries.innerHTML = `${count}`;
    select.style.display = "block";
    document.getElementById('finish').style.display = "none";
}

function instruct(){
    // let inst = document.createElement('div');
    // inst.id = 'instruct';
    // let inst1 = document.createElement('div');
    // inst1.id = 'instruct1';
    // let button = document.createElement('input');
    // button.setAttribute('type', 'button');
    // button.setAttribute('value', 'next');
    // button.setAttribute('onclick', 'instruct1()')
    select.style.display = "none";
    let row = [];
    row = document.createElement('div');
    row.classList.add('row2');
    for(let i = 0; i < 9; i++){
        row[i] = document.createElement('input');
        row[i].classList.add('box2');
        row[i].setAttribute('type', 'text');
        row[i].setAttribute('maxlength', '1');
        row[i].value = `${example[0][i]}`; 
        row.appendChild(row[i]);
    }
    document.getElementById('instruct').appendChild(row);
    document.getElementById('instruct').style.display = "block";
    document.getElementById('instruct1').style.display = "block";
}
function instruct1(){
    document.getElementById('instruct1').style.display = "none";
    let column = [];
    column = document.createElement('div');
    column.classList.add('column');
    for(let i = 0; i < 9; i++){
        column[i] = document.createElement('input');
        column[i].classList.add('col');
        column[i].setAttribute('type', 'text');
        column[i].setAttribute('maxlength', '1');
        column[i].value = `${example[i][0]}`; 
        column.appendChild(column[i]);
    }
    document.getElementById('instruct').appendChild(column);
    document.getElementById('instruct2').style.display = "block";
}
function instruct2(){
    document.getElementById('instruct2').style.display = "none";
    let reg = document.createElement('div');
    reg.classList.add('region');
    let row = [];
    for(let i = 0; i < 3; i++){
        row = document.createElement('div');
        row.classList.add('row3');
        for(let j = 0; j < 3; j++){
            row[j] = document.createElement('input');
            row[j].classList.add('box2');
            row[j].setAttribute('type', 'text');
            row[j].setAttribute('maxlength', '1');
            row[j].value = `${example[i][j]}`; 
            row.appendChild(row[j]);
        }
        reg.appendChild(row);  
    } 
    document.getElementById('instruct').appendChild(reg);
    document.getElementById('instruct3').style.display = "block";
}
function toSelect(){
    document.getElementById('instruct').style.display = "none";
    document.getElementById('instruct3').style.display = "none";
    console.log(document.getElementById('instruct').childNodes);
    for(let i = 9; i >= 7; i--){
        document.getElementById('instruct').removeChild(document.getElementById('instruct').childNodes[i]);
    }
    select.style.display = "block";
}