function myFunction(i, size) {
  
  const elem = document.getElementById("dropdown"+i);
  //const elem1 = document.getElementById('lists'+i);
  //const arrow = document.getElementById('arrow_turn'+i);
  if(elem.style.display == "block"){

    for(let i = 0; i<size; i++){
      document.getElementById("dropdown"+i).style.display = "none";
    }

    elem.style.display = "none"    
    //arrow.style.transform =  "rotate(0deg)"
  } else {

    for(let i = 0; i<size; i++){
      document.getElementById("dropdown"+i).style.display = "none";
      //document.getElementById("arrow_turn"+i).style.transform = "rotate(0deg)";
    }
    elem.style.display = "block" 
    //arrow.style.transform =  "rotate(90deg)"
    elem.style.borderBottom = "solid 1px black"
  }
}

