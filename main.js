$(function () {

  var leftButton = $(".fa-angle-left");
  var rightButton = $(".fa-angle-right");
  
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

});


