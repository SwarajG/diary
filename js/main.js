"use strict";
$(document).ready(function(){
	modal();
});

var modal = function modal(){
	var appendChild = ("<div class='modal-overlay js-modal-close'></div>");
  $('a[data-modal-id]').click(function(e){
    e.preventDefault();
    $("body").append(appendChild);
    $(".modal-overlay").fadeTo(500 , 0.7);
    var modalBox = $(this).attr('data-modal-id');
    $("#"+ modalBox).fadeIn($(this).data());
  });

  $(".js-modal-close , .modal-overlay").click(function(){
    $(".modal-box , .modal-overlay").fadeOut(500 , function(){
      $(".modal-overlay").remove();
    });
  })

  $(window).resize(function(){
    $(".modal-box").css({
      top: ($(window).height() - $(".modal-box").outerHeight()) / 2,
      left: ($(window).width() - $(".modal-box").outerWidth()) / 2
    });
  });
  $(window).resize();
};

(function(){
	$("#typed").typed({
    strings: ["Had an amazing<br>experience today!", "Want to <span style='color:black;'>remember</span><br> every moment?" , "We are here to<br> <span style='color:black;'>HELP YOU</span> :)"],
    typeSpeed: 30,
    backSpeed: 10,
    backDelay: 1000,
    loop: false,
    loopCount: false,
    showCursor: true,
    cursorChar: "|",
    attr: null,
    contentType: 'html'
	});
})();