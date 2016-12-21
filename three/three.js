
//This function will change the the first image on the page when it is clicked.
function changeOne(){

  let target = document.getElementById('imageTwo');

  if (target.style.color == 'black'){
    document.getElementById("imageOne").src = "http://phandroid.s3.amazonaws.com/wp-content/uploads/2014/05/surface-planets.jpg";
    target.style.color = 'blue';
  }else {
    document.getElementById("imageOne").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTUq5iXOhho9J3UYthqUvmE18OIq0Xq0uHk3dO50RIymL7E0JDgf1Rweo"
    target.style.color = 'blue';
  }
}

//This function will change the second image
function changeTwo(){

  //debugger;
  let target = document.getElementById('imageTwo');

  //Yeah, I used style.color to act as my guide to change the images back and forth in the conditional
  //statement. I am sick right now and the easiest thing I could think of. 
  if (target.style.color == 'black'){
    document.getElementById("imageTwo").src = "http://cdn.pcwallart.com/images/milky-way-from-earth-wallpaper-2.jpg";
    target.style.color = 'blue';
  }else{
    document.getElementById("imageTwo").src = "https://s-media-cache-ak0.pinimg.com/originals/70/af/5f/70af5fc85b63b4f54c90cace00fcecf6.jpg";
    target.style.color = 'black';
  }

}

//This function will change the third image
function changeThree(){

  let target = document.getElementById('imageThree');

  if (target.style.color == 'black'){
    document.getElementById("imageThree").src = "https://s-media-cache-ak0.pinimg.com/originals/65/39/b6/6539b6b85731b55912a81320aab21270.jpg";
    target.style.color = 'blue';
  }else{
    document.getElementById("imageThree").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMY0RbJYY3COJG93-0vP4zYXAKEzKvHRyAT9aRJpk2Y1U-HNFH"
    target.style.color = 'black';
  }
  
}
