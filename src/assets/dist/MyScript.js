
function reset(){
    if (document.getElementById("mySidebar").style.width == "0px") {
    } else {
      document.getElementById("mySidebar").style.width = "0px";
      document.getElementById("contenedor").style.width = "50px";
      document.getElementById("boton-sidebar-chevron").classList.replace("fa-chevron-left", "fa-chevron-right");
      } 
  }
  
  function deploy(){
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("contenedor").style.width = "300px";
    document.getElementById("boton-sidebar-chevron").classList.replace("fa-chevron-right", "fa-chevron-left");
  }
  
  function nav() {
    if (document.getElementById("mySidebar").style.width == "0px"){
    deploy()  
  } else {
    reset()
  }

}


