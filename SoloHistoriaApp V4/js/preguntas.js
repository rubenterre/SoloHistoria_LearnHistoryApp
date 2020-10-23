$(document).ready(function(){
  var checkmark = "<span class='checkmark'>&#x2713;</span>";
  
  $(".answer").click(function() {
    $(this).siblings(".answer").removeClass("active").children("span").remove();
    $(this).addClass("active").append(checkmark);
  });
  
  $("button").click(function() {
    if($(".active").length) {
      if($(".active").index() === 0) {
        alert("¡Bien hecho!");
      } else {
        alert("¡Respuesta errónea!");
      }
    } else {
      alert("Por favor, selecciona una respuesta");
    }
  });
});