function myFunction() {
    var x = screen.width
    var y = screen.height
  
    var width = document.getElementsByClassName("Width");
    var height = document.getElementsByClassName("Height");
  
    for (var i = 0; i < width.length; i++) {
       width[i].innerHTML = x
       height[i].innerHTML = y
    }
  
    if (x > 1537) {
      document.getElementById("lg-width").innerHTML = x;
      document.getElementById("lg-height").innerHTML = y;
      document.getElementById("laptop").style.display = "none";
    }else{
      document.getElementById("desktop").style.display = "none";
    }
  
    if (x <= 1536) {
      document.getElementById("laptop").style.display = "flex"; 
    }
  
    if (x <= 768) {
      document.getElementById("laptop").style.display = "none";
      document.getElementById("tab").style.display = "block";
    }
  
    if (x <= 576) {
      document.getElementById("tab").style.display = "none";
      document.getElementById("phone").style.display = "block";
    }
  }
  
    function clipBoard(){
      navigator.clipboard.writeText(screen.width +"*"+ screen.height);
      var copyclip = document.getElementsByClassName("copyIcon");
      var tickMark = document.getElementsByClassName("cheekIcon");
  
      for (var i = 0; i < copyclip.length; i++) {
        copyclip[i].style.display = "none"
        tickMark[i].style.display = "inline-block"
     }
    }
  
    function popUp(){
      Swal.fire(
        'Good job!',
        'Thank you for feedback',
        'info'
       )
    }
    
    function Contact(){
      document.getElementById("contact").style.display = "flex";
      document.getElementById("show").style.display = "none";
      document.getElementById("about").style.display = "none"
      document.getElementById("footer").style.display = "none";
      document.getElementById("services").style.display = "none";
    }
  
    function Home(){
      document.getElementById("show").style.display = "block"
      document.getElementById("contact").style.display = "none";
      document.getElementById("about").style.display = "none"
      document.getElementById("footer").style.display = "block";
      document.getElementById("services").style.display = "none";
    }
  
    function  about(){
      document.getElementById("show").style.display = "none"
      document.getElementById("about").style.display = "block"
      document.getElementById("contact").style.display = "none";
      document.getElementById("footer").style.display = "none";
      document.getElementById("services").style.display = "none";
    }
  
    function Services(){
      document.getElementById("show").style.display = "none"
      document.getElementById("about").style.display = "none"
      document.getElementById("contact").style.display = "none";
      document.getElementById("footer").style.display = "none";
      document.getElementById("services").style.display = "block";
    }