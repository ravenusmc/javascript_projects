
//variables
let hit = 0;
let miss = 0;

//This function will let the user know their hit count
function hits(hit){
  document.getElementById("hitArea").innerHTML = hit;
}

//This function will let the user know their miss count
function misses(miss){
  document.getElementById('missArea').innerHTML = miss
}

//This function will determine if a shell is a hit or miss.
function fireShell(){

  let fire = true;

  let num = Math.floor(Math.random()*20);

    if (num > 5){
      fire = false;
      return fire;
    }else{
      fire = true;
      return fire;
    }
}

//This function will determine if the user hit a space. I really hate having 15 functions
//That do the same thing over and over again. I may come back and fix this at a later date.
function attackOne(){

  let target = document.getElementById('one');
  
  fire = fireShell();
  if (target.style.color == 'black'){
    if (fire){
      target.style.color = 'green';
      hit += 1;
      hits(hit);
    }else {
      target.style.color = 'red';
      miss += 1;
      misses(miss);
    }
  }else {
    alert("You hit there!");
  }

}

function attackTwo(){

  let target = document.getElementById('two');
  
  fire = fireShell();
  if (target.style.color == 'black'){
    if (fire){
      target.style.color = 'green';
      hit += 1;
      hits(hit);
    }else {
      target.style.color = 'red';
      miss += 1;
      misses(miss);
    }
  }else {
    alert("You hit there!");
  }

}

function attackThree(){

  let target = document.getElementById('three');
  
  fire = fireShell();
  if (target.style.color == 'black'){
    if (fire){
      target.style.color = 'green';
      hit += 1;
      hits(hit);
    }else {
      target.style.color = 'red';
      miss += 1;
      misses(miss);
    }
  }else {
    alert("You hit there!");
  }

}

function attackFour(){

  let target = document.getElementById('four');
  
  fire = fireShell();
  if (target.style.color == 'black'){
    if (fire){
      target.style.color = 'green';
      hit += 1;
      hits(hit);
    }else {
      target.style.color = 'red';
      miss += 1;
      misses(miss);
    }
  }else {
    alert("You hit there!");
  }

}

function attackFive(){

  let target = document.getElementById('five');
  
  fire = fireShell();
  if (target.style.color == 'black'){
    if (fire){
      target.style.color = 'green';
      hit += 1;
      hits(hit);
    }else {
      target.style.color = 'red';
      miss += 1;
      misses(miss);
    }
  }else {
    alert("You hit there!");
  }

}

function attackSix(){

  let target = document.getElementById('six');
  
  fire = fireShell();
  if (target.style.color == 'black'){
    if (fire){
      target.style.color = 'green';
      hit += 1;
      hits(hit);
    }else {
      target.style.color = 'red';
      miss += 1;
      misses(miss);
    }
  }else {
    alert("You hit there!");
  }

}

function attackSeven(){

  let target = document.getElementById('seven');
  
  fire = fireShell();
  if (target.style.color == 'black'){
    if (fire){
      target.style.color = 'green';
      hit += 1;
      hits(hit);
    }else {
      target.style.color = 'red';
      miss += 1;
      misses(miss);
    }
  }else {
    alert("You hit there!");
  }

}

function attackEight(){

  let target = document.getElementById('eight');
  
  fire = fireShell();
  if (target.style.color == 'black'){
    if (fire){
      target.style.color = 'green';
      hit += 1;
      hits(hit);
    }else {
      target.style.color = 'red';
      miss += 1;
      misses(miss);
    }
  }else {
    alert("You hit there!");
  }

}

function attackNine(){

  let target = document.getElementById('nine');
  
  fire = fireShell();
  if (target.style.color == 'black'){
    if (fire){
      target.style.color = 'green';
      hit += 1;
      hits(hit);
    }else {
      target.style.color = 'red';
      miss += 1;
      misses(miss);
    }
  }else {
    alert("You hit there!");
  }

}

function attackTen(){

  let target = document.getElementById('ten');
  
  fire = fireShell();
  if (target.style.color == 'black'){
    if (fire){
      target.style.color = 'green';
      hit += 1;
      hits(hit);
    }else {
      target.style.color = 'red';
      miss += 1;
      misses(miss);
    }
  }else {
    alert("You hit there!");
  }

}

function attackEleven(){

  let target = document.getElementById('eleven');
  
  fire = fireShell();
  if (target.style.color == 'black'){
    if (fire){
      target.style.color = 'green';
      hit += 1;
      hits(hit);
    }else {
      target.style.color = 'red';
      miss += 1;
      misses(miss);
    }
  }else {
    alert("You hit there!");
  }

}

function attackTwelve(){

  let target = document.getElementById('twelve');
  
  fire = fireShell();
  if (target.style.color == 'black'){
    if (fire){
      target.style.color = 'green';
      hit += 1;
      hits(hit);
    }else {
      target.style.color = 'red';
      miss += 1;
      misses(miss);
    }
  }else {
    alert("You hit there!");
  }

}

function attackThirteen(){

  let target = document.getElementById('thirteen');
  
  fire = fireShell();
  if (target.style.color == 'black'){
    if (fire){
      target.style.color = 'green';
      hit += 1;
      hits(hit);
    }else {
      target.style.color = 'red';
      miss += 1;
      misses(miss);
    }
  }else {
    alert("You hit there!");
  }

}

function attackFourteen(){

  let target = document.getElementById('fourteen');
  
  fire = fireShell();
  if (target.style.color == 'black'){
    if (fire){
      target.style.color = 'green';
      hit += 1;
      hits(hit);
    }else {
      target.style.color = 'red';
      miss += 1;
      misses(miss);
    }
  }else {
    alert("You hit there!");
  }

}

function attackFifteen(){

  let target = document.getElementById('fifteen');
  
  fire = fireShell();
  if (target.style.color == 'black'){
    if (fire){
      target.style.color = 'green';
      hit += 1;
      hits(hit);
    }else {
      target.style.color = 'red';
      miss += 1;
      misses(miss);
    }
  }else {
    alert("You hit there!");
  }

}



//Code for Directions appear and disappearing 
const toggleList = document.getElementById('toggleList'); //Getting the button 
const listDiv = document.querySelector('.directions'); //Getting the div that my content will be in

toggleList.addEventListener('click', () => {

  //conditional statement to toggle back and forth between the button showing and hiding data.
  if (listDiv.style.display == 'block'){ 
    toggleList.textContent = 'Push to See Directions';
    listDiv.style.display = 'none'; 
  }else{
    toggleList.textContent = 'Hide Directions';
    listDiv.style.display = 'block';
  }
});