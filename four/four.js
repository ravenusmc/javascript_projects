//This function will be repeated over and over again. Partly for me to really get use to working with 
//Javascript. The function will change the image, heading and paragraph in the first image. All
//ther functions will be a replica of this one. 
function changeOne(){

  let target = document.getElementById('one');

  if (target.style.color == 'black'){
    document.getElementById('one').src = "https://source.unsplash.com/it-_C9yfRIM/255x200";
    let heading = "Have the courage to open the door";
    document.getElementById("one-heading").innerHTML = heading;
    let paragraph = "If you are...you may find comfort";
    document.getElementById('one-paragraph').innerHTML = paragraph;
    target.style.color = 'blue';

  }else{
    document.getElementById('one').src = "https://source.unsplash.com/_FjegPI89aU/255x200";
    let heading = "A lonely House...";
    document.getElementById('one-heading').innerHTML = heading;
    target.style.color = 'black';
  }
}

function changeTwo() {

  let targetTwo = document.getElementById('two');

  if (targetTwo.style.color == 'black'){
    document.getElementById('two').src = 'https://source.unsplash.com/AZMmUy2qL6A/255x200';
    document.getElementById('headingTwo').innerHTML = 'A Group of Friends';
    targetTwo.style.color = 'blue';
  }else{
    document.getElementById('two').src = "https://source.unsplash.com/K2u71wv2eI4/255x200";
    document.getElementById('headingTwo').innerHTML = 'A Lone individual...';
    targetTwo.style.color = 'black';
  }
}