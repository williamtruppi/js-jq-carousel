$(function () {

  var leftButton = $(".fa-angle-left");
  var rightButton = $(".fa-angle-right");
  var littleCircle = $(".fa-circle");
  
  console.log(leftButton, rightButton);

  rightButton.click(function () { 

    
    if($(".last").hasClass("active")){
      $(".last").removeClass("active");
      $(".first").addClass("active")
    } else {
      $(".active").next().addClass("active");
      $(".active").prev().removeClass("active");
    }
    
  });

  leftButton.click(function () {

    
    if($(".first").hasClass("active")){
      $(".first").removeClass("active");
      $(".last").addClass("active")
    } else {
      $(".active").prev().addClass("active");
      $(".active").next().removeClass("active");
    }
    
  });

  $(document).keydown(function(e){
    if (e.which == 37) { 
      if($(".first").hasClass("active")){
        $(".first").removeClass("active");
        $(".last").addClass("active")
      } else {
        $(".active").prev().addClass("active");
        $(".active").next().removeClass("active");
      }
    }

  });

  $(document).keydown(function(e){
    if (e.which == 39) { 
      if($(".last").hasClass("active")){
        $(".last").removeClass("active");
        $(".first").addClass("active")
      } else {
        $(".active").next().addClass("active");
        $(".active").prev().removeClass("active");
      }
    }
    
  });

  //CLICCARE SUI PALLINI MOSTRA L'IMMAGINE CORRISPONDENTE

  $(".fa-circle:nth-child(1)").click(function() {
    if($("img").hasClass("active") && (littleCircle.hasClass("active"))){
      $(".active").removeClass("active");
      $("img:nth-child(1)").addClass("active");
      $(".fa-circle:nth-child(1)").addClass("active");
    }
  });

  $(".fa-circle:nth-child(2)").click(function() {
    if($("img").hasClass("active") && (littleCircle.hasClass("active"))){
      $(".active").removeClass("active");
      $("img:nth-child(2)").addClass("active");
      $(".fa-circle:nth-child(2)").addClass("active");
    }
  });

  $(".fa-circle:nth-child(3)").click(function() {
    if($("img").hasClass("active") && (littleCircle.hasClass("active"))){
      $(".active").removeClass("active");
      $("img:nth-child(3)").addClass("active");
      $(".fa-circle:nth-child(3)").addClass("active");
    }
  });

  $(".fa-circle:nth-child(4)").click(function() {
    if($("img").hasClass("active") && (littleCircle.hasClass("active"))){
      $(".active").removeClass("active");
      $("img:nth-child(4)").addClass("active");
      $(".fa-circle:nth-child(4)").addClass("active");
    }
  });

});


