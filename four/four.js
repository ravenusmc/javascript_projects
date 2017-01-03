//This function will be repeated over and over again. Partly for me to really get use to working with 
//Javascript. The function will change the image, heading and paragraph in the first image. All
//ther functions will be a replica of this one. 
function changeOne(){

  let target = document.getElementById('one');

  if (target.style.color == 'black'){
    document.getElementById('one').src = "https://source.unsplash.com/it-_C9yfRIM/255x200";
    let heading = "Have the courage to open the door";
    document.getElementById("one-heading").innerHTML = heading;
    target.style.color = 'blue';

  }else{
    document.getElementById('one').src = "https://source.unsplash.com/_FjegPI89aU/255x200";
    let heading = "A lonely House...";
    document.getElementById('one-heading').innerHTML = heading;
    target.style.color = 'black';
  }
}