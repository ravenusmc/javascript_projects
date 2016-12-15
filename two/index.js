
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

//This function will determine if the user hit a space. 
function attack(){

  let target = document.getElementById('one');
  
  fire = fireShell();
  
  if (fire){
    target.style.color = 'green';
    hit += 1;
    hits(hit);
  }else {
    target.style.color = 'red';
    miss += 1;
    misses(miss);
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