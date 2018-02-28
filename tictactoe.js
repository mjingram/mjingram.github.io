var start = document.querySelector("#startButton");

var allSquares = document.querySelectorAll('td');

document.addEventListener('contextmenu', event => event.preventDefault());

function restartGame (){
  for( var i =0; i<allSquares.length; ++i){
    allSquares[i].textContent ='';

  }
}

start.addEventListener('click', restartGame);

var leftTopCell = document.querySelector('#leftTopCell');
var middleTopCell = document.querySelector('#middleTopCell');
var rightTopCell = document.querySelector('#rightTopCell');

var leftCenterCell = document.querySelector('#leftCenterCell');
var middleCenterCell = document.querySelector('#middleCenterCell');
var rightCenterCell = document.querySelector('#rightCenterCell');

var leftBottomCell = document.querySelector('#leftBottomCell');
var middleBottomCell = document.querySelector('#middleBottomCell');
var rightBottomCell = document.querySelector('#rightBottomCell');

leftTopCell.addEventListener('mousedown', function(event) {
    switch (event.which) {
        case 1:
            leftTopCell.textContent='X';
            break;
        case 2:
            alert('Middle Mouse button pressed. This is not a valid game command!');
            break;
        case 3:
            leftTopCell.textContent='O';
            break;
        default:
            alert('You have a strange Mouse! Only Left and Right Click are Allowed!');
    }
});
middleTopCell.addEventListener('mousedown', function(event) {
    switch (event.which) {
        case 1:
            middleTopCell.textContent='X';
            break;
        case 2:
            alert('Middle Mouse button pressed. This is not a valid game command!');
            break;
        case 3:
            middleTopCell.textContent='O';
            break;
        default:
            alert('You have a strange Mouse! Only Left and Right Click are Allowed!');
    }
});
rightTopCell.addEventListener('mousedown', function(event) {
    switch (event.which) {
        case 1:
            rightTopCell.textContent='X';
            break;
        case 2:
            alert('Middle Mouse button pressed. This is not a valid game command!');
            break;
        case 3:
            rightTopCell.textContent='O';
            break;
        default:
            alert('You have a strange Mouse! Only Left and Right Click are Allowed!');
    }
});

leftCenterCell.addEventListener('mousedown', function(event) {
    switch (event.which) {
        case 1:
            leftCenterCell.textContent='X';
            break;
        case 2:
            alert('Middle Mouse button pressed. This is not a valid game command!');
            break;
        case 3:
            leftCenterCell.textContent='O';
            break;
        default:
            alert('You have a strange Mouse! Only Left and Right Click are Allowed!');
    }
});

middleCenterCell.addEventListener('mousedown', function(event) {
    switch (event.which) {
        case 1:
            middleCenterCell.textContent='X';
            break;
        case 2:
            alert('Middle Mouse button pressed. This is not a valid game command!');
            break;
        case 3:
            middleCenterCell.textContent='O';
            break;
        default:
            alert('You have a strange Mouse! Only Left and Right Click are Allowed!');
    }
});


rightCenterCell.addEventListener('mousedown', function(event) {
    switch (event.which) {
        case 1:
            rightCenterCell.textContent='X';
            break;
        case 2:
            alert('Middle Mouse button pressed. This is not a valid game command!');
            break;
        case 3:
            rightCenterCell.textContent='O';
            break;
        default:
            alert('You have a strange Mouse! Only Left and Right Click are Allowed!');
    }
});

leftBottomCell.addEventListener('mousedown', function(event) {
    switch (event.which) {
        case 1:
            leftBottomCell.textContent='X';
            break;
        case 2:
            alert('Middle Mouse button pressed. This is not a valid game command!');
            break;
        case 3:
            leftBottomCell.textContent='O';
            break;
        default:
            alert('You have a strange Mouse! Only Left and Right Click are Allowed!');
    }
});


middleBottomCell.addEventListener('mousedown', function(event) {
    switch (event.which) {
        case 1:
            middleBottomCell.textContent='X';
            break;
        case 2:
            alert('Middle Mouse button pressed. This is not a valid game command!');
            break;
        case 3:
            middleBottomCell.textContent='O';
            break;
        default:
            alert('You have a strange Mouse! Only Left and Right Click are Allowed!');
    }
});

rightBottomCell.addEventListener('mousedown', function(event) {
    switch (event.which) {
        case 1:
            rightBottomCell.textContent='X';
            break;
        case 2:
            alert('Middle Mouse button pressed. This is not a valid game command!');
            break;
        case 3:
            rightBottomCell.textContent='O';
            break;
        default:
            alert('You have a strange Mouse! Only Left and Right Click are Allowed!');
    }
});



function checkForWinner() {

  //cells
  c1 = document.querySelector("#leftTopCell")
  c2 = document.querySelector("#middleTopCell")
  c3 = document.querySelector("#rightTopCell")
  c4 = document.querySelector("#leftCenterCell")
  c5 = document.querySelector("#middleCenterCell")
  c6 = document.querySelector("#rightCenterCell")
  c7 = document.querySelector("#leftBottomCell")
  c8 = document.querySelector("#middleBottomCell")
  c9 = document.querySelector("#rightBottomCell")

if(c1.textContent=='X' && c2.textContent=='X' && c3.textContent=='X'){
  alert('X has Won!');
  restartGame();
};
if(c4.textContent=='X' && c5.textContent=='X' && c6.textContent=='X'){
  alert('X has Won!');
  restartGame();
};
if(c7.textContent=='X' && c8.textContent=='X' && c9.textContent=='X'){
  alert('X has Won!');
  restartGame();
};
if(c1.textContent=='X' && c4.textContent=='X' && c7.textContent=='X'){
  alert('X has Won!');
  restartGame();
};
if(c2.textContent=='X' && c5.textContent=='X' && c8.textContent=='X'){
  alert('X has Won!');
  restartGame();
};
if(c3.textContent=='X' && c6.textContent=='X' && c9.textContent=='X'){
  alert('X has Won!');
  restartGame();
};
if(c1.textContent=='X' && c5.textContent=='X' && c9.textContent=='X'){
  alert('X has Won!');
  restartGame();
};
if(c3.textContent=='X' && c5.textContent=='X' && c7.textContent=='X'){
  alert('X has Won!');
  restartGame();
};

if(c1.textContent=='O' && c2.textContent=='O' && c3.textContent=='O'){
  alert('O has Won!');
  restartGame();
};
if(c4.textContent=='O' && c5.textContent=='O' && c6.textContent=='O'){
  alert('O has Won!');
  restartGame();
};
if(c7.textContent=='O' && c8.textContent=='O' && c9.textContent=='O'){
  alert('O has Won!');
  restartGame();
};
if(c1.textContent=='O' && c4.textContent=='O' && c7.textContent=='O'){
  alert('O has Won!');
  restartGame();
};
if(c2.textContent=='O' && c5.textContent=='O' && c8.textContent=='O'){
  alert('O has Won!');
  restartGame();
};
if(c3.textContent=='O' && c6.textContent=='O' && c9.textContent=='O'){
  alert('O has Won!');
  restartGame();
};
if(c1.textContent=='O' && c5.textContent=='O' && c9.textContent=='O'){
  alert('O has Won!');
  restartGame();
};
if(c3.textContent=='O' && c5.textContent=='O' && c7.textContent=='O'){
  alert('O has Won!');
  restartGame();
};

};


window.setInterval(function(){
  checkForWinner();
},200)
