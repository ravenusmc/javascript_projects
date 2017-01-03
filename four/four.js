function changeOne(){

  let target = document.getElementById('one');

  if (target.style.color == 'black'){
    document.getElementById('one').src = "https://source.unsplash.com/it-_C9yfRIM/255x200";
    document.getElementById('one-heading').
    target.style.color = 'blue';
  }else{
    document.getElementById('one').src = "https://source.unsplash.com/_FjegPI89aU/255x200";
    target.style.color = 'black';
  }
}