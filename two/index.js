const hit = true;

function test(hit){
  let target = document.getElementById('one');
  
  if (hit){
    alert("Hit!");
  }else {
    alert("Miss");
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
    toggleList.textContent = 'Hide List';
    listDiv.style.display = 'block';
  }
});