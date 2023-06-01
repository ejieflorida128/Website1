let displayvalue = 0;

document.getElementById("inc").onclick = function() {
    displayvalue +=1;
    
    console.log(displayvalue);
    
    document.getElementById("display").innerHTML = displayvalue;
}

document.getElementById("res").onclick = function() {
  
    displayvalue = 0;
    
   console.log(displayvalue);
   document.getElementById("display").innerHTML = displayvalue; 
}

document.getElementById("dec").onclick = function() {
    
    displayvalue -= 1;
    
    console.log(displayvalue);
    
    document.getElementById("display").innerHTML = displayvalue;
    
}
