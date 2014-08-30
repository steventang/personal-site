//list menu icon animations

$(document).ready(function(){
  $(".mail-list").mouseover(function(){
    $(".mail-icon").css("color", "#D77691");
  });
  $(".mail-list").mouseout(function(){
    $(".mail-icon").css("color", "#A19DB6");
  });
  $(".problem-list").mouseover(function(){
    $(".problem-icon").css("color", "#D77691");
  });
  $(".problem-list").mouseout(function(){
    $(".problem-icon").css("color", "#AFA1B9");
  });

//problem section slide animation

  $('.problem-content').hide();
  $('.problem-div').click(function () {
    var $this = $(this);
      $(this).siblings('.problem-content').slideToggle(150, function () {
      });
    });

  var typingTimer; //timer identifier
  var doneTypingInterval = 700;

  $('#Answer').keyup(function(){
    clearTimeout(typingTimer);
    if ($('#Answer').val) {
      typingTimer = setTimeout(doneTyping, doneTypingInterval);
    }
  });

  //user is finished typing, now validate answer
  function doneTyping () {
   var answer = $('#Answer').val();
   if(answer == '10'){
      $('.validate-wrong').hide();
      $('.validate-correct').css("display", "inline");
      $('#Check-answer').text('Correct!').hide().fadeIn(150);        
    }
    else{
      $('.validate-correct').hide();  
      $('.validate-wrong').css("display", "inline");
      $('#Check-answer').text('Nope!').hide().fadeIn(150);
    }
    if(answer == ''){
      $('.validate-wrong').hide();
      $('.validate-correct').hide();
      $('#Check-answer').text('Check answer');
    }
  }
});